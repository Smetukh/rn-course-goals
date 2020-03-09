import { call, put, takeEvery, all } from 'redux-saga/effects';
// import todosSaga from './todosSaga';
import { SET_GOAL, DELETE_GOAL, setCourseGoals } from '../store/actions/todos';




export function* createTodo({payload}) {
  console.log('action = ', payload)
  try {
    yield put({type:'SET_GOAL_SUCCESS', payload});
  } catch (error) {
    console.log('createTodo error:', error.message);
  }
}

//watcher saga
function* watchSetGoal() {
console.log('watchSetGoal!!!!!!!!!!!')
  yield takeEvery(SET_GOAL, createTodo);

}

export function* deleteTodo({payload}) {
  console.log('actiondeleteTodo = ', payload)
  try {
    yield put({type:'DELETE_GOAL_SUCCESS', payload});
  } catch (error) {
    console.log('createTodo error:', error.message);
  }
}

//watcher saga
function* watchDeleteGoal() {
console.log('watchSetGoal!!!!!!!!!!!')
  yield takeEvery(DELETE_GOAL, deleteTodo);

}

function* rootSaga() {
    yield all([
      watchSetGoal(),
      watchDeleteGoal(),
    ])
  };

export default rootSaga;