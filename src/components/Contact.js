import React, { useState } from 'react'
import styled from 'styled-components'
import Input from './Input'

const ContactForm = styled.div`
    width: 400px;

    div select, div textarea {
        margin-bottom: 10px;
        border: 1px solid #D6D6D6;
        border-radius: 8px;
    }

    button {
        margin-top: 10px;
    }
`

const Select = styled.select`
    width: 100%;
    padding: 10px 15px;
`



const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        location: '',
        reason: '',
        message: ''
    })

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const {
        firstName,
        lastName,
        email,
        company,
        location,
        reason,
        message
    } = formData


    const handleSubmit = () => {
        console.log(reason)
    }

    return (
        <ContactForm>
            <Input type="text" label="First Name" placeholder="First Name" value={firstName} handleChange={(e) => onChange(e)}/>
            <Input type="text" label="Last Name" placeholder="Last Name" value={lastName} handleChange={(e) => onChange(e)}/>
            <Input type="text" label="Email" placeholder="Email" value={email} handleChange={(e) => onChange(e)}/>
            <Input type="text" label="Company" placeholder="Company" value={company} handleChange={(e) => onChange(e)}/>
            <Input type="text" label="Location" placeholder="Location" value={location} handleChange={(e) => onChange(e)}/>
            <div >
                <label htmlFor="reason">Reason For Contacting</label>
                <Select id="reason" className="d-block mb-10" name="reason" value={reason ? reason: ''} onChange={(e) => onChange(e)}>
                    <option value=""></option>
                    <option value="I want to list a machine">I want to list a machine</option>
                    <option value="I want to buy a machine">I want to buy a machine</option>
                    <option value="I want more information">I want more information</option>
                </Select>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="10" name="message" value={message} onChange={(e) => onChange(e)}></textarea>
            </div>
            <button className="btn btn-primary w-100" onClick={() => handleSubmit()}>Send</button>
        </ContactForm>
    )
}

export default Contact
