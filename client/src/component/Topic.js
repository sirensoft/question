import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  axios from 'axios';


class Topic extends Component {
  
  constructor(){
    super()
    this.state = {
      topic :[]
    }
  }
  async componentDidMount(){
    let rs = await axios.get('/topic')
    this.setState({
      topic:rs.data
    })
  }

  render() {
    return (
      <div>
        <h1>รายการคำถาม</h1>
        <ul>
          {
            this.state.topic.map((row)=>(
              <li key={row.id}>
                <Link to={'/todo/'+row.id} >{row.topic.title}</Link>
              </li>            
            ))
          }
         
        </ul>
        <hr/>
        <p>
        <a href="https://jsonformatter.org/" target="_blank">https://jsonformatter.org/</a>
      </p>
      <p>
        <a 
          href=" https://github.com/mozilla-services/react-jsonschema-form/"
          target="_blank">react-jsonschema-form</a>
      </p>
      </div>
    )
  }

}
export default Topic;