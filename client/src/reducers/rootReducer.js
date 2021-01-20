import { combineReducers } from "redux";
import { persons, personsHasErrored} from "./persons";

const rootReducer = combineReducers({
    persons,
    personsHasErrored
});

export default rootReducer;