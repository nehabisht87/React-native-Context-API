import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {headerTabData} from '../appConstants';
import {ThemeContext} from '../contexts/ThemeContexts';
import {AuthContext} from '../contexts/AuthContext';

export default class Navbar extends Component {
  static contextType = ThemeContext;
  static contextType = AuthContext;
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => {
          return (
            <ThemeContext.Consumer>
              {themeContext => {
                const {isDarkTheme, darkTheme, lightTheme} = themeContext;
                const {isLoggedIn, changeAuthStatus} = authContext;
                const theme = isDarkTheme ? darkTheme : lightTheme;
                return (
                  <View style={{flex: 1, backgroundColor: 'white'}}>
                    <View style={[styles.headerContainer, theme]}>
                      <Text style={[styles.headerText, theme]}>Context</Text>
                      <TouchableOpacity onPress={changeAuthStatus}>
                        <Text style={[styles.headerText, theme]}>
                          {isLoggedIn ? 'Logged In' : 'Logged out'}
                        </Text>
                      </TouchableOpacity>

                      <View style={styles.headerTabContainer}>
                        {headerTabData.map((item, index) => {
                          console.log('item', item);
                          return (
                            <Text key={index} style={[styles.headerTabText]}>
                              {item}
                            </Text>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    // flex: 1,
    backgroundColor: 'dimgrey',
    height: 170,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  headerText: {
    marginTop: 25,
    fontSize: 28,
    color: 'black',
  },
  headerTabContainer: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 25,
    backgroundColor: 'lightgrey',
    // alignSelf: 'flex-end',
  },
  headerTabText: {
    fontSize: 22,
    paddingVertical: 20,
    paddingHorizontal: 10,
    color: 'black',
  },
});
