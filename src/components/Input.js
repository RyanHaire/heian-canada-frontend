import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

const Label = styled.label`
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding-bottom: 5px;
`;

const InputField = styled.input`
    outline: none;
    border: 1px solid #D6D6D6;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const Input = ( { handleChange, label, type, name, value } ) => {
    return (
        <InputContainer>
            <Label htmlFor={ label }>{ label }</Label>
            <InputField id={ label } value={value} placeholder={ label } type={ type } name={name} onChange={e => handleChange(e)} />
        </InputContainer>
    )
}

export default Input
