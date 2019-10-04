import { combineReducers } from 'redux'

import {
    counterModel,
    clickerModel
} from './store'

import {
    counterType,
    clickerType
} from './types/store'

import { counterReducersType, clickerReducersType } from "./types/reducers"

const counter = (counterStore: counterType = counterModel, action: counterReducersType): counterType => {
    switch(action.type){
        case "UPDATE_COUNTER":
            return {
                ...counterStore,
                count: action.payload.count
            }
        default:
            return counterStore
    }
}

const clicker = (clickerStore: clickerType = clickerModel, action: clickerReducersType): clickerType => {
    switch(action.type){
        case "UPDATE_CLICKER":
            return {
                ...clickerStore,
                click: action.payload.click
            }
        default:
            return clickerStore
    }
}

/** 
 * ? store type is already Reducer, no need to declare type here 
 */
const reducer = combineReducers({
    counter,
    clicker
})

export default reducer