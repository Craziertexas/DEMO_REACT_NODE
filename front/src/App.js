import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Sign_in from './components/Sign_in';
import Sign_up from './components/Sign_up';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/Sign_in" component={Sign_in}/>
              <Route path="/Sign_up" component={Sign_up}/>
              <Route component={Error}/>
            </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;