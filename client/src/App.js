import React, {Component} from 'react';
import Todo from './component/Todo'; 
import {BrowserRouter,Link,Router,Route,Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" render={()=>(<h1>xxxxxx</h1>)} />
          <Route path="/todo/:id" component={Todo}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
