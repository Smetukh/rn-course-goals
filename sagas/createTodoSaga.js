import { takeEvery, put } from 'redux-saga/effects';
import { SET_GOAL, setCourseGoals } from '../store/actions/todos';


export function* createTodo({payload}) {
  try {
    yield put({type:'SET_GOAL_SUCCESS', payload});
  } catch (error) {
    console.log('createTodo error:', error.message);
  }
}

//watcher saga
export default function* watchSetGoal() {
  yield takeEvery(SET_GOAL, createTodo);
}
