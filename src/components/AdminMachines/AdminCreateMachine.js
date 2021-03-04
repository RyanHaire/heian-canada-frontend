import React from 'react'
import styled from 'styled-components'
import Input from '../Input'

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

const AdminCreateMachine = () => {
    return (
        <CreateMachineForm>
            <InputContainer>
                <Label htmlFor="images">Images</Label>
                <input type="file" id="images" name="images" multiple accept="image/png, image/jpeg"/>
            </InputContainer>
            <Input type="text" label="Manufacturer" placeholder="Manufacturer" name="brand"/>
            <Input type="text" placeholder="Model" name="model"/>
            <Input type="text" placeholder="Year" name="year"/>
            <div>
                <label htmlFor="description">Description 1</label>
                <input type="text" name="description" />
            </div>
           <button>Create Machine</button> 
        </CreateMachineForm>
    )
}

export default AdminCreateMachine
