import React, {Component} from 'react';

import {BrowserRouter,Link,Router,Route,Switch} from 'react-router-dom';
import Todo from './component/Todo'; 
import Topic from './component/Topic';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path ="/" component={Topic} />
            <Route path="/todo/:id" component={Todo}/>
          </Switch>
        </BrowserRouter>
        <h2><a href="https://jsonformatter.org/" target="_blank">https://jsonformatter.org/</a></h2>
        <h2><a href=" https://github.com/mozilla-services/react-jsonschema-form/" target="_blank">react-jsonschema-form</a></h2>
      </div>
    )
  }
}

export default App;
