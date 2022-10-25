import { useState } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';

function App() {
  const [dayTime, setDayTime] = useState(true)

  return (
    <div >
      < Header dayTime={dayTime} setDayTime={setDayTime} />
      <MainContent dayTime={dayTime}/>
    </div>
  );
}

export default App;
