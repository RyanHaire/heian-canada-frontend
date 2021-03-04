import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import machineTypes from './machineTypes'
import machine from './machine'
import region from './region'

export default combineReducers({
    auth,
    machineTypes,
    machine,
    region
})