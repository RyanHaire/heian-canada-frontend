import React from 'react'
import styled from 'styled-components'

const LoginForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`

const Login = () => {
    return (
        <div>
            <form>
                <div>
                    <label for="username"/>
                    <input id="username" type="text" name="username" placeholder="Username" />
                </div>
            </form>
        </div>
    )
}

export default Login