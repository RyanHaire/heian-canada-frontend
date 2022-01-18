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

const initialState = {
    isPending: false,
    manufacturers: [],
    manufacturer: ''
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case FETCH_MANUFACTURER_PENDING:
        case CREATE_MANUFACTURER_PENDING:
        case UPDATE_MANUFACTURER_PENDING:
        case DELETE_MANUFACTURER_PENDING:
        case FETCH_MANUFACTURERS_PENDING:            
            return {
                ...state,
                isPending: true
            }
        case FETCH_MANUFACTURERS_SUCCESS:
            return {
                ...state,
                isPending: false,
                manufacturers: payload
            }
        case FETCH_MANUFACTURER_SUCCESS:
            return {
                ...state,
                isPending: false,
                manufacturer: payload
            }
        case CREATE_MANUFACTURER_SUCCESS:
            return {
                ...state,
                isPending: false,
                manufacturers: [...state.manufacturers, payload]
            }
        case UPDATE_MANUFACTURER_SUCCESS:
            return {
                ...state,
                isPending: false,
                manufacturers: state.manufacturers.map(type =>  {
                    if(type._id !== payload._id) {
                        return type
                    }
                    return {
                        ...type,
                        ...payload
                    }
                })
            }
        case DELETE_MANUFACTURER_SUCCESS:
            return {
                ...state,
                isPending: false,
                manufacturers: state.manufacturers.filter(type => type._id !== payload._id)
            }
        case CREATE_MANUFACTURER_FAIL:
        case UPDATE_MANUFACTURER_FAIL:
        case DELETE_MANUFACTURER_FAIL:
        case FETCH_MANUFACTURER_FAIL:
        case FETCH_MANUFACTURERS_FAIL:
            return {
                ...state,
                isPending: false
            }
        default:
            return state
    }
}