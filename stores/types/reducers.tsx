import {
    counterType,
    clickerType
} from './store'

export interface counterReducersType {
    type: counterActions
    payload: counterType
}

export type counterActions = "UPDATE_COUNTER"

export interface clickerReducersType {
    type: any,
    payload: clickerType
}

export type clickerActions = "UPDATE_CLICKER"