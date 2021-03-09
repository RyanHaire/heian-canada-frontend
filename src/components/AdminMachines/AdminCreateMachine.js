import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Input from '../Input'
import RichTextEditor from 'react-rte'
import { createMachine } from '../../actions/machine'
import { fetchMachineTypes } from '../../actions/machinesTypes'
import { fetchRegions } from '../../actions/regions'

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

const AdminCreateMachine = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        // fetch regions
        dispatch(fetchRegions())
        
        // fetch machine types
        dispatch(fetchMachineTypes())
    }, [dispatch])

    const machineTypeState = useSelector((state) => state.machineTypes) || []
    const regionState = useSelector((state) => state.region) || []

    const [uploadedImages, setUploadedImages] = useState(0)
    const [editorState, setEditorState] = useState(RichTextEditor.createEmptyValue())
    const [inputList, setInputList] = useState([{name: '', details: ''}])
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
        region: ''
    })

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    const handleUploadedImages = (e) => {
        if(e.target.files.length > 0) {
            const images = []
            for(let i =0; i < e.target.files.length; i++) {
                images.push(URL.createObjectURL(e.target.files[i]))
            }
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

    const handleTEChange = (value) => {
        setEditorState(value)
    }

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
        region 
    } = formData

    const handleCreateMachine = () => {
        //console.log(editorState.toString('html'))
    }

    return (
        <>
            <CreateMachineForm>
                <InputContainer>
                    <Label htmlFor="images">Images</Label>
                    <div className="mb-10">
                        {uploadedImages && uploadedImages.map((x) => <img src={x} className="w-25"/>)}
                    </div>
                    <input type="file" id="images" name="images" multiple accept="image/png, image/jpeg" onChange={handleUploadedImages}/>
                </InputContainer>
                <Input type="text" label="Manufacturer" name="manufacturer" value={manufacturer} handleChange={e => onChange(e)}/>
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
                    <InputField type="number" name="priceOld" value={priceOld} placeholder="Price Old" onChange={e => onChange(e)}/>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="machine-type">Machine Type</Label>
                    <SelectField id="machine-type" name="machineType" value={machineType} onChange={e => onChange(e)}>
                        {machineTypeState.machines === [] ?  
                            machineTypeState.machineTypes.map((machineType, i) => {
                                return (<option key={i} value={machineType.name}>{machineType.name}</option>)
                        }) : 
                            <option value="No Machine Types Available">No Machine Types Available</option>
                        }
                    </SelectField>
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="region">Region</Label>
                    <SelectField id="region" name="region" value={region} onChange={e => onChange(e)}>
                        <option value=""></option>
                        {regionState.regions !== [] ? regionState.regions.map((region, i) => {
                            return (<option key={i} value={region.name}>{region.name}</option>)
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
                    <RichTextEditor value={editorState} onChange={handleTEChange}/>
                </InputContainer>
                <button onClick={() => handleCreateMachine()}>Create Machine</button> 
            </CreateMachineForm>
        </>
    )
}

export default AdminCreateMachine
