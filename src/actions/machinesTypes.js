import axios from 'axios'
import {
    FETCH_MACHINE_TYPES_PENDING,
    FETCH_MACHINE_TYPES_SUCCESS,
    FETCH_MACHINE_TYPES_FAIL,
    FETCH_MACHINE_TYPE_PENDING,
    FETCH_MACHINE_TYPE_SUCCESS,
    FETCH_MACHINE_TYPE_FAIL,
    CREATE_MACHINE_TYPE_PENDING,
    CREATE_MACHINE_TYPE_SUCCESS,
    CREATE_MACHINE_TYPE_FAIL,
    UPDATE_MACHINE_TYPE_PENDING,
    UPDATE_MACHINE_TYPE_SUCCESS,
    UPDATE_MACHINE_TYPE_FAIL,
    DELETE_MACHINE_TYPE_PENDING,
    DELETE_MACHINE_TYPE_SUCCESS,
    DELETE_MACHINE_TYPE_FAIL,
} from '../constants'
import { setAlert } from './alert'

// action to get all machine types
export const fetchMachineTypes = () => async dispatch => {
    try {
        dispatch({
            type: FETCH_MACHINE_TYPES_PENDING,
        })

        const res = await axios.get('http://localhost:5000/api/machinetype/all')
        
        dispatch({
            type: FETCH_MACHINE_TYPES_SUCCESS,
            payload: res.data
        })
        
    } catch (error) {
        console.error(error.response)
        const errors = error.response.data.errors

        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_MACHINE_TYPES_FAIL
        })
    }
}

// action to get machine type by id
export const fetchMachineType = id => async dispatch => {
    try {
        dispatch({
            type: FETCH_MACHINE_TYPE_PENDING
        })

        const res = await axios.get(`http://localhost:5000/api/machinetype/${id}`)

        dispatch({
            type: FETCH_MACHINE_TYPE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            //errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_MACHINE_TYPE_FAIL
        })
    }
}

// action to create a machine type
export const createMachineType = name => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    dispatch({
        type: CREATE_MACHINE_TYPE_PENDING
    })

    const json = JSON.stringify({name: name})

    try {
        const res = await axios.post('http://localhost:5000/api/machinetype/create', json, config)

        dispatch({
            type: CREATE_MACHINE_TYPE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Machine type created!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: CREATE_MACHINE_TYPE_FAIL
        })
    }
}

// action to update a machine type
export const updateMachineType = (formData, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    dispatch({
        type: UPDATE_MACHINE_TYPE_PENDING
    })

    try {
        const res = await axios.put(`http://localhost:5000/api/machinetype/${id}`, formData, config)

        dispatch({
            type: UPDATE_MACHINE_TYPE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Machine type updated!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: UPDATE_MACHINE_TYPE_FAIL
        })
    }
}

// action to delete a machine type
export const deleteMachineType = id => async dispatch => {
    
    dispatch({
        type: DELETE_MACHINE_TYPE_PENDING
    })
    
    try {
        const res = await axios.delete(`http://localhost:5000/api/machinetype/${id}`)

        dispatch({
            type: DELETE_MACHINE_TYPE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Machine type deleted!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: DELETE_MACHINE_TYPE_FAIL
        })
    }
}