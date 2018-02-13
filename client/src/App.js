import React, {Component} from 'react';
import Todo from './component/Todo'; 
class App extends Component {
  render(){
    return (
      <div style={{margin:25}}>
        <Todo />
      </div>
    )
  }
}

export default App;
