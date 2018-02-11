import React, {Component} from 'react';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      data: []
    };
  }

  callApi = async() => {

    let uri = '/topic';
    let res = await fetch(uri);
    let json = await res.json();
    this.setState({
      data: [
        ...this.state.data,
        json
      ]
    })
  }
  render() {
    return (
      <div className="App">

        <button onClick={this.callApi}>Call</button>
        <div>
          {this.state.data[0]
            ? this
              .state
              .data[0]
              .map((val, index) => (
                <li key={index}>{index}-{val.topic_id}
                  ={JSON.stringify(val.rawdata)}</li>
              ))
            : ''
}
        </div>

      </div>
    );
  }
}

export default App;
