import * as React from 'react';
import './App.css';
import TextField from './components/common/TextField/TextField';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TextField name="name" label="name" />
      </div>
    );
  }
}

export default App;
