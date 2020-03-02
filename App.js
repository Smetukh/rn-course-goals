import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

import todosReducer from './store/reducers/todos';

const rootReducer = combineReducers({
  todos: todosReducer
});

const store = createStore(rootReducer);

function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
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
    <Provider store={store}>
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoalAdditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

export default App;