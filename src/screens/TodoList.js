import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {TodoListContent} from '../appConstants';
import {ThemeContext} from '../contexts/ThemeContexts';
export default class TodoList extends Component {
  static contextType = ThemeContext;
  render() {
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const {todoContainer, textStyle} = styles;
    return (
      <View style={[styles.todoContainer, theme]}>
        {TodoListContent.map((item, i) => {
          return (
            <Text style={[styles.textStyle, theme]} key={i}>
              {item}
            </Text>
          );
        })}
        <TouchableOpacity
          style={styles.changeThemeButton}
          onPress={changeTheme}>
          <Text style={styles.changeThemeButtonText}>Change Theme</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    flex: 2,
    backgroundColor: '#E3DEE2',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {margin: 10, color: 'black', fontSize: 14},
  changeThemeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 20,
  },
  changeThemeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
