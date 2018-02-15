import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Topic extends Component {

  render() {
    return (
      <div>
        <h1>รายการคำถาม</h1>
        <ul>
          <li>
            <Link to='/todo/1'>คำถาที่ 1</Link>
          </li>
          <li>
            <Link to='/todo/2'>คำถาที่ 2</Link>
          </li>
          <li>
            <Link to='/todo/3'>คำถาที่ 3</Link>
          </li>

        </ul>
      </div>
    )
  }

}
export default Topic;