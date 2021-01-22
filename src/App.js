import { Component } from 'react';
import classes from './App.module.css';
import Keyboard from './components/Keyboard/Keyboard';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <Keyboard />
      </div>
    )
  }
}

export default App;
