import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  // 公用颜色主题
  state = {
    isLightTheme: true,
    light: {
      syntax: '#555',
      ui: '#ddd',
      bg: '#eee'
    },
    dark: {
      syntax: '#ddd',
      ui: '#333',
      bg: '#555'
    }
  };
  render() {
    return (
      // 建立 Provider，并传入 state，供子组件使用
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
