import { createStore, compose } from "redux"

import reducer from "./reducer"

const composeEnhancers = (typeof window !== "undefined" && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

/** 
 * ? store type is already Store, no need to declare type here 
 */
const store = createStore(reducer, composeEnhancers())

export default store