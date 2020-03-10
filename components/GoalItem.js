import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Button, ThemeProvider } from 'react-native-elements'


const theme = {
  Button: {
    raised: true,
    buttonStyle: {
      marginTop: 10,
      backgroundColor: 'red',
    },
    titleStyle: {
      color: 'violet',
    },

    
  },
};

const GoalItem = props => {
  return (
    <View  >
      <ThemeProvider theme={theme}>
        <View style={styles.goalItemContainer}>
          <View style={styles.goalItem}>
            <ListItem
              key={props.id}
              title={props.title}
              chevron
            />
          </View>
          <TouchableOpacity style={styles.goalItemDelete}>
            <Button
              onPress={props.onDelete.bind(this, props.id)}
              title="Delete" 
            />
          </TouchableOpacity>
        </View>
      </ThemeProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItemDelete: {
    width: '20%',
    minWidth: 50,
  },
  goalItem: {
    width: '80%',
  },
  goalItemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
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

