import { createStore} from "redux";
import ImageReducer from "./ImageReducer";

const Store=createStore(ImageReducer)
export default Store