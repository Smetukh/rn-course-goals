export const SET_GOAL = 'SET_GOAL';
export const SET_GOAL_SUCCESS = 'SET_GOAL_SUCCESS';
export const DELETE_GOAL = 'DELETE_GOALv';
export const DELETE_GOAL_SUCCESS = 'DELETE_GOAL_SUCCESS';


export const setCourseGoals = currentGoals => {
    return {
        type: SET_GOAL,
        payload: currentGoals,
    }
};

export const setCourseGoalsSuccess = action => {
    return {
        type: SET_GOAL_SUCCESS,
        payload: action.payload,
    }
};

export const deleteCourseGoals = goalId => {
    return {
        type: DELETE_GOAL,
        payload: goalId,
    }
};

export const deleteCourseGoalsSuccess = action => {
    return {
        type: DELETE_GOAL_SUCCESS,
        payload: action.payload,
    }
};