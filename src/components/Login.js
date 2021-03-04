import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const LoginForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`

const Login = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const { username, password } = formData

    const handleLogin = () => {
       // dispatch(login(username.trim(), password.trim()));
        setFormData({username: '', password: ''})
    }

    return (
        <LoginForm>
            <Input type="text" label="Username" placeholder="Username" name="username" value={username}handleChange={e => onChange(e)}/>
            <Input label="Password" type="password" value={password} name="password" handleChange={e => onChange(e)}/>
            <button onClick={() => handleLogin()}>Login</button>
        </LoginForm>
    )
}

export default Login