import React from 'react'
import { Form, Button } from 'react-bootstrap'

const LoginScreen = () => {
    return (
        <div className="login-screen">
            <h2>Heian Admin Login</h2>
            <div>
                <Form className="login-screen-form">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginScreen
