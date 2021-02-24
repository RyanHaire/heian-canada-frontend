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

const initialState = {
    isPending: false,
    machines: [],
    machine: null,
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case UPDATE_MACHINE_PENDING:
        case DELETE_MACHINE_PENDING:
        case CREATE_MACHINE_PENDING:
        case FETCH_MACHINE_PENDING:
        case FETCH_MACHINES_PENDING:
            return {
                ...state,
                isPending: true
            }
        case FETCH_MACHINES_SUCCESS:
            return {
                ...state,
                isPending: false,
                machines: payload
            }
        case CREATE_MACHINE_FAIL:
        case UPDATE_MACHINE_FAIL:
        case DELETE_MACHINE_FAIL:
        case FETCH_MACHINE_FAIL:
        case FETCH_MACHINES_FAIL:
            return {
                ...state,
                isPending: false
            }
        case FETCH_MACHINE_SUCCESS:
            return {
                ...state,
                isPending: false,
                machine: payload
            }
        case CREATE_MACHINE_SUCCESS:
            return {
                ...state,
                isPending: false,
                machines: [...state.machines, payload]
            }
        case UPDATE_MACHINE_SUCCESS:
            return {
                ...state,
                isPending: false,
                regions: state.regions.map(machine =>  {
                    if(machine._id !== payload._id) {
                        return machine
                    }
                    return {
                        ...machine,
                        ...payload
                    }
                })
            }
        case DELETE_MACHINE_SUCCESS:
            return {
                ...state,
                isPending: false,
                machines: state.machines.filter(machine => machine._id !== payload._id)
            }
        default:
            return state
    }
}