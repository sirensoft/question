import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Topic extends Component {

  render() {
    return (
      <div>
        <p>
          <h2>
            <a href="https://jsonformatter.org/" target="_blank">https://jsonformatter.org/</a>
          </h2>
          <h2>
            <a
              href=" https://github.com/mozilla-services/react-jsonschema-form/"
              target="_blank">react-jsonschema-form</a>
          </h2>
        </p>
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