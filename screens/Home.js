import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {bindActionCreators} from "redux";
import { useSelector, connect } from 'react-redux';
import { Button, ThemeProvider } from 'react-native-elements';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

import todosReducer from '../store/reducers/todos';
import * as actionCreatorsTodos from '../store/actions/todos';


const theme = {
  Button: {
    raised: true,
    color: 'red',
    titleStyle: {
      color: 'violet',
    },
  },
};

function Home (props) {
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setIsAddMode(false);
    props.setCourseGoals({ id: Math.random().toString(), value: goalTitle });
  };

  const removeGoalHandler = goalId => {
    props.deleteCourseGoals({ goalId });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
      <View style={styles.screen}>
        <ThemeProvider theme={theme}>
          <Button 
            title="Add New Goal" 
            onPress={() => setIsAddMode(true)} />
        </ThemeProvider>
        
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
  deleteCourseGoals: bindActionCreators(actionCreatorsTodos, dispatch).deleteCourseGoals,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
