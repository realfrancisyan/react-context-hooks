import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themeContext';

class Navbar extends Component {
  static contextType = ThemeContext; // 引入 context，这样便可以在 ThemeProvider 中读取 state

  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
