import axios from 'axios'
import {
    FETCH_MACHINES_PENDING,
    FETCH_MACHINES_SUCCESS,
    FETCH_MACHINES_FAIL,
    FETCH_MACHINE_PENDING,
    FETCH_MACHINE_SUCCESS,
    FETCH_MACHINE_FAIL,
    CREATE_MACHINE_PENDING,
    CREATE_MACHINE_SUCCESS,
    CREATE_MACHINE_FAIL,
    UPDATE_MACHINE_PENDING,
    UPDATE_MACHINE_SUCCESS,
    UPDATE_MACHINE_FAIL,
    DELETE_MACHINE_PENDING,
    DELETE_MACHINE_SUCCESS,
    DELETE_MACHINE_FAIL,

} from '../constants'
import { setAlert } from './alert'

// action to get all new machines
export const fetchNewMachines = () => async dispatch => {
    try {
        dispatch({
            type: FETCH_MACHINES_PENDING
        })

        const res = await axios.get('http://localhost:5000/api/machine/all/new')

        dispatch({
            type: FETCH_MACHINES_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const errors = error.response.data.errors

        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_MACHINES_FAIL
        })
    }
}

// action to get all used machines
export const fetchUsedMachines = () => async dispatch => {
    try {
        dispatch({
            type: FETCH_MACHINES_PENDING
        })

        const res = await axios.get('http://localhost:5000/api/machine/all/used')

        dispatch({
            type: FETCH_MACHINES_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const errors = error.response.data.errors

        if(errors) {
            //errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_MACHINES_FAIL
        })
    }
}

// action to get all machines
export const fetchMachines = () => async dispatch => {
    try {

        dispatch({
            type: FETCH_MACHINES_PENDING
        })

        const res = await axios.get('http://localhost:5000/api/machine/all/machines')

        dispatch({
            type: FETCH_MACHINES_SUCCESS,
            payload: res.data
        })
    } catch(error) {
        const errors = error.response.data.errors

        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_MACHINES_FAIL
        })
    }
}

// action to get all machines by type id
export const fetchMachinesByTypeId = (typeId, isUsed = null) => async dispatch => {
    try {
        dispatch({
            type: FETCH_MACHINES_PENDING
        })
        let res = null
        
        if(isUsed === true) {
            res = await axios.get(`http://localhost:5000/api/machine/all/used/${typeId}`)
        } else if(isUsed === false) {
            res = await axios.get(`http://localhost:5000/api/machine/all/new/${typeId}`)
        } else {
            res = await axios.get(`http://localhost:5000/api/machine/all/${typeId}`)
        }

        dispatch({
            type: FETCH_MACHINES_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const errors = error.response.data.errors

        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_MACHINES_FAIL
        })
    }
}

// action to get machine by id
export const fetchMachine = id => async dispatch => {
    try {
        dispatch({
            type: FETCH_MACHINE_PENDING
        })

        const res = await axios.get(`http://localhost:5000/api/machine/${id}`)
        //console.log("res.data is " + JSON.stringify(res.data))
        dispatch({
            type: FETCH_MACHINE_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: FETCH_MACHINE_FAIL
        })
    }
}

// action to create a machine
export const createMachine = formData => async dispatch => {
    console.log(formData)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    dispatch({
        type: CREATE_MACHINE_PENDING
    })

    try {
        const res = await axios.post('http://localhost:5000/api/machine', formData, config)

        dispatch({
            type: CREATE_MACHINE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Machine Created!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: CREATE_MACHINE_FAIL
        })
    }
}

// action to update a machine
export const updateMachine = (formData, id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    dispatch({
        type: UPDATE_MACHINE_PENDING
    })

    try {
        const res = await axios.put(`http://localhost:5000/api/machine/${id}`, formData, config)

        dispatch({
            type: UPDATE_MACHINE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Machine Updated!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: UPDATE_MACHINE_FAIL
        })
    }
}

// action to delete a machine
export const deleteMachine = id => async dispatch => {
    
    dispatch({
        type: DELETE_MACHINE_PENDING
    })
    
    try {
        const res = await axios.delete(`http://localhost:5000/api/machine/${id}`)

        dispatch({
            type: DELETE_MACHINE_SUCCESS,
            payload: res.data
        })

        dispatch(setAlert('Machine Deleted!', 'success'))
    } catch (error) {
        const errors = error.response.data.errors
        
        if(errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
        }

        dispatch({
            type: DELETE_MACHINE_FAIL
        })
    }
}
