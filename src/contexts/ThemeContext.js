import React from 'react';

export const ThemeContext =  React.createContext();

class ThemeContextProvider extends React.Component {

  state = {
      isDarkTheme: false,
      dark: {bg: '#222529', txt: '#D65F5f', subTxt:'#fff', hover: 'rgba(231, 76, 60, 0.8'}, 
      light: {bg: '#F8F9FA', txt: '#222529', subTxt:'#5792C8', hover: 'rgba(254, 209, 54, 0.8'}
   }

   changeTheme = () => {
    this.setState({isDarkTheme: !this.state.isDarkTheme})
   }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, changeTheme: this.changeTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }

  
}


export default ThemeContextProvider;