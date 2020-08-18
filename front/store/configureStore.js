// configureStore.js
import { createWrapper } from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "../sagas";
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleWare();
  const loggerMiddleWare = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    return next(action);
  };
  const middlewares = [sagaMiddleware, loggerMiddleWare];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
