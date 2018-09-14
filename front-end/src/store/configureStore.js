import {
  createStore,
  applyMiddleware
} from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import {
  createBrowserHistory
} from "history";
import {
  connectRouter
} from "connected-react-router";
const history = createBrowserHistory();

export default function configureStore(initialState) {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    applyMiddleware(thunk)
  );
}