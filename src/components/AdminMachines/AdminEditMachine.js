import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../Input'
import { Editor} from "react-draft-wysiwyg"; 
import {EditorState, convertFromRaw, convertToRaw} from 'draft-js'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { fetchMachine, updateMachine } from '../../actions/machine'
import { fetchRegions } from '../../actions/regions'
import { fetchMachineTypes } from '../../actions/machinesTypes'
import { fetchManufacturers } from '../../actions/manufacturers';


const InputContainer = styled.div`
    display: flex;
    flex-flow: column;
    margin-bottom: 20px;
`;

const Label = styled.label`
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding-bottom: 5px;
`;

const CreateMachineForm = styled.div`
    margin-top: 50px;
    width: 500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const InputField = styled.input`
    outline: none;
    border: 1px solid #D6D6D6;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const SelectField = styled.select`
    outline: none;
    border: 1px solid #D6D6D6;
    background: white;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 10px;
`

const AdminEditMachine = (props) => {
    let { id } = useParams()
    const dispatch = useDispatch()
    const machineState = useSelector((state) => state.machine) || []
    const machineTypeState = useSelector((state) => state.machineTypes) || []
    const regionState = useSelector((state) => state.region) || []
    const manufacturerState = useSelector((state) => state.manufacturers) || []

    const [uploadedImages, setUploadedImages] = useState(0)
    const [editorState, setEditorState] = useState()
    const [inputList, setInputList] = useState([])
    const [formData, setFormData] = useState({
        manufacturer: '',
        model: '',
        year: '',
        voltage: '',
        conditionRating: '',
        conditionDescription: '',
        priceNew: '',
        priceOld: '',
        machineType: '',
        region: '',
        isUsed: ''
        }
    )

    useEffect(() => {
        try {
            dispatch(fetchMachine(id))

            dispatch(fetchRegions())
    
            dispatch(fetchMachineTypes())
    
            dispatch(fetchManufacturers())
            
            setFormData({
                manufacturer: manufacturerState.manufacturers.filter((m, i) => m._id == machineState.machine.manufacturer)[0].name,
                model: machineState.machine.model,
                year: machineState.machine.year,
                voltage: machineState.machine.voltage,
                conditionRating: machineState.machine.condition.rating,
                conditionDescription: machineState.machine.condition.description,
                priceNew: machineState.machine.price.new,
                priceOld: machineState.machine.price.used,
                machineType: machineTypeState.machineTypes.find(x => x._id === machineState.machine.type).name,
                region: regionState.regions.find(x => x._id === machineState.machine.region).name,
                isUsed: machineState.machine.isUsed
            })

            setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(machineState.machine.additionalDescription))))

        } catch(error) {
            console.log(error)
        }
       
    }, [dispatch])

    
    const onChange = e => {
        let val = e.target.value
        if(e.target.type === 'checkbox') {
            val = !isUsed
        }
        setFormData({...formData, [e.target.name]: val})
    } 
    
    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const handleUploadedImages = async (e) => {
        console.log(e.target)
        if(e.target.files.length > 0) {
            const images = []
            for(let i =0; i < e.target.files.length; i++) {
               await getBase64(e.target.files[i], (then) => {
                    images.push(then)
                    console.log("images length is now " + images.length)
                })
            }
            console.log('setting images ' + images.length)
            setUploadedImages(images) 
        }
    }

    // handle input change for description list
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };
    
    // handle click event of the Remove button for removing a description
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    // handle click event of the Add button for adding a description
    const handleAddClick = () => {
        
        setInputList([...inputList, { name: "", details: "" }]);
    };

    const { 
        manufacturer,
        model,
        year,
        voltage,
        conditionRating,
        conditionDescription,
        priceNew,
        priceOld,
        machineType, 
        region,
        isUsed
    } = formData

    const handleUpdateMachine = () => {
        if(manufacturer === '') {
            alert('manufacturer is empty!')
            return
        }

        if(model == '') {
            alert('model is empty!')
            return
        }

        if(year == '') {
            alert('year is empty!')
            return
        }

        if(voltage == '') {
            alert('voltage is empty!')
            return
        }

        if(conditionRating == '') {
            alert('condition rating is empty!')
            return
        }

        if(conditionDescription == '') {
            alert('condition description is empty!')
            return
        }

        if(priceNew == '') {
            alert('price new is empty!')
            return
        }

        if(priceOld == '') {
            alert('price used is empty!')
            return
        }

        if(machineType == '') {
            alert('machine type is empty!')
            return
        }

        if(region == '') {
            alert('region is empty!')
            return
        }

        const contentState = editorState.getCurrentContent()
        dispatch(
            updateMachine(
                {
                    ...formData, 
                    images: uploadedImages, 
                    descriptions: inputList, 
                    additionalDescription: JSON.stringify(convertToRaw(contentState))
                },
                id)
        )

        setEditorState(EditorState.createEmpty())
        console.log(formData)
        window.location.reload()
    }

    return (
        <>
        {machineState.machine === null ? "Loading..." : 
        <CreateMachineForm>
            <h1>Remember to refresh a couple times after updating.</h1>
            {console.log(machineState)}
            <InputContainer>
                <Label htmlFor="images">Images</Label>
                <div className="mb-10">
                    {uploadedImages && uploadedImages.map((x) => <img src={x} className="w-25"/>)}
                </div>
                <input type="file" id="images" name="images" multiple accept="image/png, image/jpeg" onChange={handleUploadedImages}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="machine-manufacturer">Manufacturer</Label>
                <SelectField id="machine-manufacturer" name="manufacturer" value={manufacturer} onChange={e => onChange(e)}>
                    <option value=""></option>
                    {manufacturerState.manufacturers !== [] ?  
                        manufacturerState.manufacturers.map((m, i) => {
                            return (<option key={i} value={m.name}>{m.name}</option>)
                    }) : 
                        <option value="No Manufacturers Types Available">No Manufacturers Types Available</option>
                    }
                </SelectField>
            </InputContainer>
            <Input type="text" label="Model" name="model" value={model} handleChange={e => onChange(e)}/>
            <Input type="text" label="Year" name="year" value={year} handleChange={e => onChange(e)}/>
            <Input type="text" label="Voltage" name="voltage" value={voltage} handleChange={e => onChange(e)}/>
            <InputContainer>
                <Label htmlFor="condition">Condition</Label>
                <InputField type="number" id="condition" name="conditionRating" value={conditionRating} placeholder="Rating out of 5" onChange={e => onChange(e)}/>
                <InputField type="text" name="conditionDescription" value={conditionDescription} placeholder="Description (Bad - Very Good)" onChange={e => onChange(e)}/> 
            </InputContainer>
            <InputContainer>
                <Label htmlFor="price">Price</Label>
                <InputField type="number" id="price" name="priceNew" value={priceNew} placeholder="Price New" onChange={e => onChange(e)}/>
                <InputField type="number" name="priceOld" value={priceOld} placeholder="Price Used" onChange={e => onChange(e)}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="isused">Is it a used machine?</Label>
                <InputField type="checkbox" id="isused" name="isUsed" checked={isUsed} onChange={e => onChange(e)}/>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="machine-type">Machine Type</Label>
                <SelectField id="machine-type" name="machineType" value={machineType} onChange={e => onChange(e)}>
                    <option value=""></option>
                    {machineTypeState.machineTypes !== [] ?  
                        machineTypeState.machineTypes.map((machineType, i) => {
                            return (<option key={i}  value={machineType.name}>{machineType.name}</option>)
                    }) : 
                        <option value="No Machine Types Available">No Machine Types Available</option>
                    }
                </SelectField>
            </InputContainer>
            <InputContainer>
                <Label htmlFor="region">Region</Label>
                <SelectField id="region" name="region" value={region} onChange={e => onChange(e)}>
                    <option value=""></option>
                    {regionState.regions !== [] ? regionState.regions.map((r, i) => {
                        return (<option key={i} value={r.name}>{r.name}</option>)
                    }) : <option value="No Regions Available">No Regions Available</option>}
                </SelectField> 
            </InputContainer>
            {inputList.map((x, i) => {
                return (<InputContainer key={i}>
                    <Label htmlFor={`description-${i}`}>
                        Description {`${i + 1}`} &nbsp;
                        <span className="btn-box">
                            {inputList.length !== 1 && <button className="btn btn-primary w-25 mr-10" onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button className="btn btn-primary w-25" onClick={handleAddClick}>Add</button>}
                        </span>
                    </Label>
                    <InputField type="text" name="name" placeholder="Name" value={x.name} onChange={e => handleInputChange(e, i)}/>
                    <InputField type="text" name="details" placeholder="Details" value={x.details} onChange={e => handleInputChange(e, i)}/>
                </InputContainer>)
            })}
            <InputContainer>
                <Label>Addtional Description</Label>
                <Editor style={{border: '1px solid black'}} editorState={editorState} onEditorStateChange={setEditorState} />
            </InputContainer>
            <button onClick={() => handleUpdateMachine()}>Update Machine</button> 
        </CreateMachineForm>
        }
            
        </>
    )
}

export default AdminEditMachine
