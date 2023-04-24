import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isDarkTheme: false,
    lightTheme: {
      color: '#222',
      backgroundColor: '#d8ddf1',
    },
    darkTheme: {
      color: '#fff',
      backgroundColor: '#5A585A',
    },
  };

  changeTheme = () => {
    console.log('first', this.state);
    this.setState({isDarkTheme: !this.state.isDarkTheme});
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{...this.state, changeTheme: this.changeTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
