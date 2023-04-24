import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from './src/screens/navbar';
import TodoList from './src/screens/TodoList';
import ThemeContextProvider from './src/contexts/ThemeContexts';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <ThemeContextProvider>
        <Navbar />
        <TodoList />
      </ThemeContextProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
