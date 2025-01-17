import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Create from './components/create';
import Store from "./components/store";
import Edit from './components/edit';
import Homepage from './components/homepage';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/store">Store</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <h2>It-World</h2>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/create" component={Create} />
            <Route path="/store" component={Store} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
