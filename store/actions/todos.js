export const SET_GOAL = 'SET_GOAL';
export const SET_GOAL_SUCCESS = 'SET_GOAL_SUCCESS';


export const setCourseGoals = currentGoals => {
    return {
        type: SET_GOAL,
        payload: currentGoals,
    }
};

// export const setAsyncGoals = () => {
//     return {
//         type: SET_ASYNC_GOAL
//     }
// }
