import React from 'react';
<<<<<<< HEAD
import { Route, Switch } from 'react-router';

import Navbar from './components/Navbar';
import Buy from './pages/Buy';
import Done from './pages/Done';
import Main from './pages/Main';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/done" component={Done} />
        <Route path="/buy" component={Buy} />
      </Switch>
    </div>
  );
};

export default App;
=======
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Navbar} from './components/Navbar'
import {Alert} from './components/Alert'
import {AlertState} from './context/alert/AlertState'
import {FirebaseState} from './context/firebase/FirebaseState'
import {Done} from "./pages/Done";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
            <Alert/>
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/about'} component={About}/>
              <Route path={'/done'} component={Done}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
>>>>>>> refs/remotes/origin/master
