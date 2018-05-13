import React, {Component} from 'react';
import axios from 'axios';

const server = 'http://localhost:8000/api/sample';

class App extends Component {
  // この関数を編集
  handleClick(event) {
    axios.get(server)
      .then((res) => {
        console.log(res);
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get Data</button>
      </div>
    );
  }
}

export default App;
