import { put, takeEvery, all } from 'redux-saga/effects';
import { SET_GOAL, DELETE_GOAL } from '../store/actions/todos';

const delay = (ms) => new Promise(res => setTimeout(res, ms));


export function* createTodo({payload}) {
  try {
    yield delay(1000);
    yield put({type:'SET_GOAL_SUCCESS', payload});
  } catch (error) {
    console.log('createTodo error:', error.message);
  }
}

//watcher saga
function* watchSetGoal() {
  yield takeEvery(SET_GOAL, createTodo);

}

export function* deleteTodo({payload}) {
  try {
    yield delay(2000)
    yield put({type:'DELETE_GOAL_SUCCESS', payload});
  } catch (error) {
    console.log('createTodo error:', error.message);
  }
}

//watcher saga
function* watchDeleteGoal() {
  yield takeEvery(DELETE_GOAL, deleteTodo);
}

function* rootSaga() {
    yield all([
      watchSetGoal(),
      watchDeleteGoal(),
    ])
  };

export default rootSaga;