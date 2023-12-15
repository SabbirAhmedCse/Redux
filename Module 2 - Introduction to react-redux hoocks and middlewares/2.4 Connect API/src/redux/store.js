import { createStore } from "redux";
import { connect } from "react-redux";
import { counterReducer } from "../../../2.2 Creating Reducers/src/redux/counter/counterReducer";
const store = createStore(counterReducer);
export default store;
