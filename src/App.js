import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavbarPage from './components/Navigation';
import Routes from './Routes';
import './App.css';

class App extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="App">
        <NavbarPage />
        <Routes />
      </div>
    );
  }
}

//export default App;
export default withRouter(App);