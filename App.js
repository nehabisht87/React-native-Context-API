import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from './src/screens/navbar';
import TodoList from './src/screens/TodoList';
import ThemeContextProvider from './src/contexts/ThemeContexts';
import AuthContextProvider from './src/contexts/AuthContext';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <TodoList />
        </ThemeContextProvider>
      </AuthContextProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
