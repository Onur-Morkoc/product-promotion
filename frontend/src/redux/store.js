import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { devToolsEnhancer } from "redux-devtools-extension"
import { productsReducer,newProductReducer,productReducer,productDetailsReducer } from "./reducers/productReducer"
import { userReducer, profileReducer, allUsersReducer, userDetailsReducer } from "./reducers/userReducer"

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  newProduct: newProductReducer,
  product: productReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer
})

let initialstate = {};

const store = configureStore({
  reducer,
  preloadedState: initialstate,
  devTools: [devToolsEnhancer({ realtime: true })]
})

export default store;
