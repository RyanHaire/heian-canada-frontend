import axios from 'axios'
import {
    FETCH_MANUFACTURERS_PENDING,
    FETCH_MANUFACTURERS_SUCCESS,
    FETCH_MANUFACTURERS_FAIL,
    FETCH_MANUFACTURER_PENDING,
    FETCH_MANUFACTURER_SUCCESS,
    FETCH_MANUFACTURER_FAIL,
    CREATE_MANUFACTURER_PENDING,
    CREATE_MANUFACTURER_SUCCESS,
    CREATE_MANUFACTURER_FAIL,
    UPDATE_MANUFACTURER_PENDING,
    UPDATE_MANUFACTURER_SUCCESS,
    UPDATE_MANUFACTURER_FAIL,
    DELETE_MANUFACTURER_PENDING,
    DELETE_MANUFACTURER_SUCCESS,
    DELETE_MANUFACTURER_FAIL,
} from '../constants'
import { setAlert } from './alert'

// action to get all machine types
export const fetchManufacturers = () => async dispatch => {
    try {
        dispatch({
            type: FETCH_MANUFACTURERS_PENDING,
        })

        const res = await axios.get('http://localhost:5000/api/manufacturer/all/manufacturers')
        
        dispatch({
            type: FETCH_MANUFACTURERS_SUCCESS,
            payload: res.data
        })
        
    } catch (error) {
        console.error(error.response)
        const errors = error.response.data.errors

        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_MANUFACTURERS_FAIL
        })
    }
}

// action to get machine type by id
export const fetchManufacturer = id => async dispatch => {
    try {
        dispatch({
            type: FETCH_MANUFACTURER_PENDING
        })

        const res = await axios.get(`http://localhost:5000/api/manufacturer/${id}`)
        
        dispatch({
            type: FETCH_MANUFACTURER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_MANUFACTURER_FAIL
        })
    }
}

// action to create a machine type
export const createManufacturer = name => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    dispatch({
        type: CREATE_MANUFACTURER_PENDING
    })

    const json = JSON.stringify({name: name})

    try {
        const res = await axios.post('http://localhost:5000/api/manufacturer/create', json, config)

        dispatch({
            type: CREATE_MANUFACTURER_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Manufacturer created!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: CREATE_MANUFACTURER_FAIL
        })
    }
}

// action to update a machine type
export const updateManufacturer = (formData, id) => async dispatch => {
    const obj = {
        manufacturer: formData
    }
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    dispatch({
        type: UPDATE_MANUFACTURER_PENDING
    })

    try {
        const res = await axios.put(`http://localhost:5000/api/manufacturer/update/${id}`, obj, config)

        dispatch({
            type: UPDATE_MANUFACTURER_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Manufacturer updated!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: UPDATE_MANUFACTURER_FAIL
        })
    }
}

// action to delete a machine type
export const deleteManufacturer = id => async dispatch => {
    
    dispatch({
        type: DELETE_MANUFACTURER_PENDING
    })
    
    try {
        const res = await axios.delete(`http://localhost:5000/api/manufacturer/delete/${id}`)

        dispatch({
            type: DELETE_MANUFACTURER_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Machine type deleted!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: DELETE_MANUFACTURER_FAIL
        })
    }
}