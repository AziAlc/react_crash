import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {
    state = {
      todos : [
        {
           id:1,
           title: 'Take trash',
           completed: false
        },
        {
           id:2,
           title: 'Make Dinner',
           completed: false
        },
        {
           id:3,
           title: 'Finish course',
           completed: false
        }
      ]
    }

  render() {

    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
