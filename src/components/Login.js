import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { login } from '../actions/auth'
import Input from './Input'

const LoginForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`

const Login = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const userState = useSelector((state) => state.auth) || []

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const { email, password } = formData

    const handleLogin = () => {
        dispatch(login(email.trim(), password.trim()));
        setFormData({email: '', password: ''})
    }

    return (
        <>
        {console.log("Login.js is " + userState.urlBeforeLogin)}
        {userState.user === null ?  <LoginForm>
            <Input type="text" label="Email" name="email" value={email} handleChange={e => onChange(e)}/>
            <Input type="password" label="Password" name="password" value={password} handleChange={e => onChange(e)}/>
            <button className="btn btn-primary w-100" onClick={() => handleLogin()}>Login</button>
        </LoginForm> 
        : 
        <Redirect to={userState.urlBeforeLogin || "/admin/dashboard"}/>
        }
    </>
       
    )
}

export default Login