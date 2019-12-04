import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import {Home} from "./components/Home"
import { LearningPage } from './components/LearningPage';
import { Numbers } from './components/Numbers';
import { Addition } from './components/Addition';
import { Substitution } from './components/Substitution';
import { AdditionGame } from './components/AdditionGame';
function App() {
  return (
    <div className="App">    
    <BrowserRouter>
        <div>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/learning">
            <LearningPage/>
          </Route>
          <Route exact path="/learning/numbers">
            <Numbers/>
          </Route>
          <Route exact path="/learning/addition">
            <Addition/>
          </Route>
          <Route exact path="/learning/substitution">
            <Substitution/>
          </Route>
          <Route exact path="/game">
            <AdditionGame/>
          </Route>  
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
