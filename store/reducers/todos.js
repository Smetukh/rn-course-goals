import { SET_GOAL, SET_GOAL_SUCCESS } from '../actions/todos';

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

    case SET_GOAL_SUCCESS:
      console.log('action.payload = ', action)
      return state;
      
    default:
      return state;
  }
};

export default todosReducer;
