import React, { Component } from 'react';
import './App.scss';
import Group from './Component/Group/Group';
import StudentList from './Component/StudentList/StudentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Group/>
        <StudentList/>
      </div>
    );
  }
}

export default App;
