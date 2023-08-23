import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
const store = configureStore({
      reducer,
})

console.log(store);
export default store ;