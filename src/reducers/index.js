import { combineReducers } from "@reduxjs/toolkit";

import todos from "./todos";
const reducer = combineReducers({
     // reducer: rootReducer,
     todos,
})
export default reducer ;