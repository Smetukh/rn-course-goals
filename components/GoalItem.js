import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {bindActionCreators} from "redux";
import { useSelector, connect } from 'react-redux';

const GoalItem = props => {
  // const availableGoals = useSelector(state => state.todos.todos);
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
  // toggleMenu: bindActionCreators(actionCreatorsMenu, dispatch).toggleMenu,
  // channelUpdate: bindActionCreators(actionCreatorsChannels, dispatch).channelUpdate
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalItem);

