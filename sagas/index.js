import { call, put, takeEvery, all } from 'redux-saga/effects';
import createTodoSaga from './createTodoSaga';
import deleteTodoSaga from './deleteTodoSaga';

function* rootSaga() {
    yield all([
      createTodoSaga,
      deleteTodoSaga,

    ])
  };

export default rootSaga;