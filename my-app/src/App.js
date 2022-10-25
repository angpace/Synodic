import { useState } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';

function App() {
  const [dayTime, setDayTime] = useState(true)
  const appClass = dayTime ? "App light" : "App dark"
  return (

    <div className={appClass}>
      < Header dayTime={dayTime} setDayTime={setDayTime}/>
      <MainContent dayTime={dayTime}/>
    </div>
  );
}

export default App;
