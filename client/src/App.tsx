import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from 'antd';
import { ExclamationOutlined, CheckCircleFilled } from '@ant-design/icons'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          successful import icons. <br/>
          <CheckCircleFilled /> go to LAYOUT!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
