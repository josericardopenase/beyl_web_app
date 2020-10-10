import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeProvider from './Store/Themes/ThemeProvider';
import ThemeContext from './Store/Themes/ThemeContext';

function App() {

  const theme = useContext(ThemeContext)

  return (

    <div>
      <div className="App">
        <h1 style={{color: theme.colors.primary} as React.CSSProperties}>hello how are u</h1>
      </div>

      <div onClick={() => theme.toggle()}>
        cambiar tema
      </div>
    </div>

  );
}

export default App;
