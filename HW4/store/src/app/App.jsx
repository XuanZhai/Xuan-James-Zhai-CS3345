import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { ROUTES } from '../routes';

class App extends React.Component {

    render () {
      return (
        <div>
          <Router>
            <Switch>
              { ROUTES.map((route,index) => <Route key = {index} {... route} />) }
            </Switch>
          </Router>
        </div>
      )
    }
}


export default App