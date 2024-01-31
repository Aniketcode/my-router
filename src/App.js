// import logo from './logo.svg';
import './App.css';
import Navbar from "./MyComponents/Navbar"
import About from "./MyComponents/About"
import Home from "./MyComponents/Home"
import Contact from "./MyComponents/Contact"
import Footer from "./MyComponents/Footer"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  

} from "react-router-dom";



function App() {
  return (
    <>
   <Router>
    <Navbar title="Protfolio"/>
    
    <Switch>

    <Route exact path="/">
            <Home />
        </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
       
        
        </Switch>
      <Footer />
    
    </Router> 
    


    </>
  );
}

export default App;
