import axios from 'axios'
import {
    FETCH_REGIONS_PENDING,
    FETCH_REGIONS_SUCCESS,
    FETCH_REGIONS_FAIL,
    FETCH_REGION_PENDING,
    FETCH_REGION_SUCCESS,
    FETCH_REGION_FAIL,
    CREATE_REGION_PENDING,
    CREATE_REGION_SUCCESS,
    CREATE_REGION_FAIL,
    UPDATE_REGION_PENDING,
    UPDATE_REGION_SUCCESS,
    UPDATE_REGION_FAIL,
    DELETE_REGION_PENDING,
    DELETE_REGION_SUCCESS,
    DELETE_REGION_FAIL,
} from '../constants'

import { setAlert } from './alert'

export const fetchRegions = () => async dispatch => {
    try {
        dispatch({
            type: FETCH_REGIONS_PENDING
        })

        const res = await axios.get('http://localhost:5000/api/region/all/regions')

        dispatch({
            type: FETCH_REGIONS_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        console.error(error.response)
        var errors = []
        if(error.response.data) {
            errors = error.response.data.errors
        }
        

        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_REGIONS_FAIL
        })
    }
}

// action to get region by id
export const fetchRegion = id => async dispatch => {
    try {
        dispatch({
            type: FETCH_REGION_PENDING
        })

        const res = await axios.get(`http://localhost:5000/api/region/${id}`)

        dispatch({
            type: FETCH_REGION_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_REGION_FAIL
        })
    }
}

// action to create a machine
export const createRegion = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    dispatch({
        type: CREATE_REGION_PENDING
    })

    const json = JSON.stringify({ name: formData })

    try {
        const res = await axios.post('http://localhost:5000/api/region/create', json, config)

        dispatch({
            type: CREATE_REGION_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Region Created!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: CREATE_REGION_FAIL
        })
    }
}

// action to update a region
export const updateRegion = (name, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    dispatch({
        type: UPDATE_REGION_PENDING
    })

    const json = JSON.stringify({ name: name})

    try {
        const res = await axios.put(`http://localhost:5000/api/region/update/${id}`, json, config)

        dispatch({
            type: UPDATE_REGION_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Region Updated!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: UPDATE_REGION_FAIL
        })
    }
}

// action to delete a region
export const deleteRegion = id => async dispatch => {
    
    dispatch({
        type: DELETE_REGION_PENDING
    })
    
    try {
        const res = await axios.delete(`http://localhost:5000/api/region/${id}`)

        dispatch({
            type: DELETE_REGION_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Region Deleted!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: DELETE_REGION_FAIL
        })
    }
}