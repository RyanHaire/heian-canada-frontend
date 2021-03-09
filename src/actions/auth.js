import axios from 'axios'
import { setAlert } from './alert'
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../constants'
import setAuthToken from '../utility/setAuthToken'

// action to load user into localstorage
export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)

        try {
            const res = await axios.get('http://localhost:5000/api/user')
    
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (error) {
            console.error(error)
            dispatch({
                type: AUTH_ERROR
            })
        }
    } else {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// action to login user
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('http://localhost:5000/api/user/login', body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    } catch (error) {
        console.log(error.response)
        const errors = error.response.data.errors
        console.log(`errors = ${errors}`)
        if(errors) {
            errors.forEach(err => {
                console.log(err.msg)
                dispatch(setAlert(err.msg, 'danger'))
            })
        }

        dispatch({
            type: LOGIN_FAIL
        })
    }
}


// action to logout a user
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
}