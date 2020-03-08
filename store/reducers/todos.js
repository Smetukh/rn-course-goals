import { SET_GOAL } from '../actions/todos';

const initialState = {
  todos: [
    {id: 'abc', value: 'TEST'},
    {id: 'abccc', value: 'TEST1'},
  ]

};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOAL:
      console.log('action.payload = ', action.payload)
      return { ...state, todos: state.todos.concat(action.payload) };

    default:
      return state;
  }
};

export default todosReducer;
