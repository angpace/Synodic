import { useState } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ToDo from './ToDo';
import Weather from './Weather';

function App() {

  const [dayTime, setDayTime] = useState(true)
  const appClass = dayTime ? "App light" : "App dark"
  return (


  
    <div className={appClass}>
      <Router>
      <Header dayTime={dayTime} setDayTime={setDayTime} />
        <div>
          <nav>
            
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/todo">
              <ToDo />
            </Route>
            <Route path="/weather">
              <Weather dayTime={dayTime}/>
            </Route>
            <Route path="/">
              <MainContent dayTime={dayTime} />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <MainContent dayTime={dayTime}/> */}
    </div>
  );
}

export default App;
