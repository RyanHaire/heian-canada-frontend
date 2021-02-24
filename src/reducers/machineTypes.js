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

const initialState = {
    isPending: false,
    machineTypes: [],
    machineType: null
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case FETCH_MACHINE_TYPE_PENDING:
        case CREATE_MACHINE_TYPE_PENDING:
        case UPDATE_MACHINE_TYPE_PENDING:
        case DELETE_MACHINE_TYPE_PENDING:
        case FETCH_MACHINE_TYPES_PENDING:            
            return {
                ...state,
                isPending: true
            }
        case FETCH_MACHINE_TYPES_SUCCESS:
            return {
                ...state,
                isPending: false,
                machineTypes: payload
            }
        case FETCH_MACHINE_TYPE_SUCCESS:
            return {
                ...state,
                isPending: false,
                machineType: payload
            }
        case CREATE_MACHINE_TYPE_SUCCESS:
            return {
                ...state,
                isPending: false,
                machineTypes: [...state.machineTypes, payload]
            }
        case UPDATE_MACHINE_TYPE_SUCCESS:
            return {
                ...state,
                isPending: false,
                machineTypes: state.machineTypes.map(type =>  {
                    if(type._id !== payload._id) {
                        return type
                    }
                    return {
                        ...type,
                        ...payload
                    }
                })
            }
        case DELETE_MACHINE_TYPE_SUCCESS:
            return {
                ...state,
                isPending: false,
                machineTypes: state.machineTypes.filter(type => type._id !== payload._id)
            }
        case CREATE_MACHINE_TYPE_FAIL:
        case UPDATE_MACHINE_TYPE_FAIL:
        case DELETE_MACHINE_TYPE_FAIL:
        case FETCH_MACHINE_TYPE_FAIL:
        case FETCH_MACHINE_TYPES_FAIL:
            return {
                ...state,
                isPending: false
            }
        default:
            return state
    }
}