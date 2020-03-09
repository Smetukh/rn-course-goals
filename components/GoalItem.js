import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements'

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <ListItem
        key={props.id}
        title={props.title}
        chevron
      />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalItem);

