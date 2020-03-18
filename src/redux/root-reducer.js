import { combineReducers } from "redux";

import directoryReducer from "./directory/directory.reducer";
// import cartReducer from './cart/cart.reducer'

const rootReducer = combineReducers({
  directory: directoryReducer
  //   cart: cartReducer
});

export default rootReducer;
