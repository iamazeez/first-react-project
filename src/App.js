import react from 'react';
import ReactDOM from 'react-dom';
import {About, Home, Contact, Navbar, User, NotFound} from './components/react-roter/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {Login} from './components/auth/index';

function App() {

 
  

  return (
    <>
    {/*
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/user/:name" exact component={User} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    
  </Router>
    */ }

     <Login />


    </>
  )
}

export default App;
