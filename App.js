import React from 'react';
import './App.css';
import EventBind from './BindEvents';
import ScreenDoor2 from './ScreenDoor2';
import Fact from './Fact'
function App() {
  return (
    <div className="App">
      <EventBind /><br />
      <ScreenDoor2 /><br />
      <Fact /><br />
      <h2>WELCOME TO React.js</h2>
    </div>
  );
}

export default App;
