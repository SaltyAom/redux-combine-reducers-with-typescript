import { createStore } from "redux"

import reducer from "./reducer"

/** 
 * ? store type is already Store, no need to declare type here 
 */
const store = createStore(reducer)
export default store
