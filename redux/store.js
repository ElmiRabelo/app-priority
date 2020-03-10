import { createStore } from "redux";
//rootReducer
import reducer from "./ducks";

export default createStore(reducer);
