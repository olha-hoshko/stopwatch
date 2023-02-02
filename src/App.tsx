import { useState } from 'react';
import './App.css';
import { Buttons } from './components/Buttons/Buttons';
import { StopwatchContext } from './components/StopwatchContext/StopwatchContext';
import { StopwatchDisplay } from './components/StopwatchDisplay/StopwatchDisplay';
import { TimeContainer } from './components/TimeContainer/TimeContainer';

function App() {
  const [time, setStopwatchTime] = useState({ hours: 0, minutes: 0, seconds: 0, isRunning: false });

  return (
    <div className="App">
      <StopwatchContext.Provider value={{ ...time, setStopwatchTime }}>
        <h2>{time.isRunning ? 'STOPWATCH is ON' : 'STOPWATCH'}</h2>
        <StopwatchDisplay />
        <Buttons />
        <TimeContainer />
      </StopwatchContext.Provider>
    </div>
  );
}

export default App;
