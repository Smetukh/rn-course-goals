import { takeEvery, put } from 'redux-saga/effects';
import { SET_GOAL } from '../store/actions/todos';


export function* createTodo(action) {
    try {
      yield put({type:'SET_GOAL_SUCCESS', action});
    } catch (error) {
      console.log('createTodo error:', error.message);
    }
  }

//watcher saga
export default function* watchSetGoal() {
    yield takeEvery(SET_GOAL, createTodo);

}
