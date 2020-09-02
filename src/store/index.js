import {createStore} from "redux";
import reducerRaiz from "../reducers";

const store = createStore(reducerRaiz);

export default store;