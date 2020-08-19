import {
  all,
  fork,
  put,
  call,
  take,
  takeEvery,
  throttle,
  delay,
  takeLatest,
} from "redux-saga/effects";
import axios from "axios";
import postSaga from "./post";
import userSaga from "./user";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl; //실제 ip
axios.defaults.withCredentials = true;
//fork call의 차이점은 알아야한다.
//call fork의 차이는 동기와 비동기이다.
export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
