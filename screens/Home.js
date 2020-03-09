import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {bindActionCreators} from "redux";
import { useSelector, connect } from 'react-redux';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

import todosReducer from '../store/reducers/todos';
import * as actionCreatorsTodos from '../store/actions/todos';



function Home (props) {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
    props.setCourseGoals({ id: Math.random().toString(), value: goalTitle });
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={props.todos}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>    
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});


const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
  setCourseGoals: bindActionCreators(actionCreatorsTodos, dispatch).setCourseGoals,
  // channelUpdate: bindActionCreators(actionCreatorsChannels, dispatch).channelUpdate
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
