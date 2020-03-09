import { DELETE_GOAL_SUCCESS, SET_GOAL_SUCCESS } from '../actions/todos';

const initialState = {
  todos: [
    {id: 'abc', value: 'TEST'},
    {id: 'abccc', value: 'TEST1'},
  ]

};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_GOAL_SUCCESS:
      return { ...state, todos: state.todos.concat(action.payload) };

    case DELETE_GOAL_SUCCESS:
      return { ...state, todos: state.todos.filter(goal => goal.id !== action.payload.goalId) };
      
    default:
      return state;
  }
};

export default todosReducer;
