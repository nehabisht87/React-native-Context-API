import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {headerTabData} from '../appConstants';
import {ThemeContext} from '../contexts/ThemeContexts';

export default class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          // console.log('this.context', this.context);

          const {isDarkTheme, darkTheme, lightTheme} = this.context;
          const theme = isDarkTheme ? darkTheme : lightTheme;
          return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
              <View style={[styles.headerContainer, theme]}>
                <Text style={[styles.headerText, theme]}>Context</Text>
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
