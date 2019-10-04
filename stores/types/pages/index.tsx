import { counterType, clickerType } from "stores/types/store"
import { counterActions, clickerActions } from "stores/types/reducers"

export interface storeType {
	clicker: clickerType
	counter: counterType
}

export interface storeFactory {
	store: storeType
}

export type dispatchActions = counterActions | clickerActions

export interface dispatchType {
    type: dispatchActions
    payload: clickerType | counterType
}

export interface dispatchFactory {
    dispatch: {
        updateCounter: Function
        updateClicker: Function
    }
}