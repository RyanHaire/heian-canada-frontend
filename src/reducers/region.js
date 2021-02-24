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
    DELETE_REGION_FAIL
} from '../constants'

const initialState = {
    regions: [],
    region: null,
    isPending: false
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case CREATE_REGION_PENDING:
        case UPDATE_REGION_PENDING:
        case DELETE_REGION_PENDING:
        case FETCH_REGION_PENDING:
        case FETCH_REGIONS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case FETCH_REGIONS_SUCCESS:
            return {
                ...state, 
                isPending: false,
                regions: payload
            }
        case FETCH_REGION_FAIL:
        case CREATE_REGION_FAIL:
        case UPDATE_REGION_FAIL:
        case DELETE_REGION_FAIL:
        case FETCH_REGIONS_FAIL:
            return {
                ...state,
                isPending: false
            }
        case FETCH_REGION_SUCCESS:
            return {
                ...state, 
                isPending: false,
                region: payload
            }
        case CREATE_REGION_SUCCESS:
            return {
                ...state,
                isPending: false,
                regions: [...state.regions, payload]
            }
        case UPDATE_REGION_SUCCESS:
            return {
                ...state,
                isPending: false,
                regions: state.regions.map(region =>  {
                    if(region._id !== payload._id) {
                        return region
                    }
                    return {
                        ...region,
                        ...payload
                    }
                })
            }
        case DELETE_REGION_SUCCESS:
            return {
                ...state,
                isPending: false,
                regions: state.regions.filter(region => region._id !== payload._id)
            }
        default: 
            return state
    }
}