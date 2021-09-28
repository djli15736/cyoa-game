import React from 'react';
import './App.css';
import POWERS from './assets/powers.json';
import { PowerViewer } from './components/PowerViewer';

function App(): JSX.Element {
  return (
    <div className="App">
      <PowerViewer></PowerViewer>
    </div>
  );
}

export default App;
