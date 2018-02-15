import React, {Component} from 'react';

import {BrowserRouter,Link,Router,Route,Switch} from 'react-router-dom';
import Todo from './component/Todo'; 
import Topic from './component/Topic';

class App extends Component {
  render(){
    return (
      
        <BrowserRouter>
          <Switch>
            <Route exact path ="/" component={Topic} />
            <Route path="/todo/:id" component={Todo}/>
          </Switch>
        </BrowserRouter>
        
      
    )
  }
}

export default App;
