import React from 'react';
import TeamTable from './components/TeamTable';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TeamTable />
    );
  }
}

export default App;
