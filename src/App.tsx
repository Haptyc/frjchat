import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Login from "./Routes/Login";
import Register from "./Register";




function App() {
  return (
   <Router>
     <div>
       <nav>
           <ul>
               <li>
                   <Link to="/about">About Us</Link>
               </li>
               <li>
                   <Link to="/contact">Contact Us</Link>
               </li>
               <li>
                   <Link to="/login">Login</Link>
               </li>
               <li>
                   <Link to="/register">Register</Link>
               </li>
               <li>
                   <Link to="/">Home</Link>
               </li>
           </ul>
       </nav>
         <Switch>

             <Route path="/about">
                 <About/>
             </Route>
             <Route path="/contact">
                 <Contact/>
             </Route>
             <Route path="/login">
                 <Login/>
             </Route>
             <Route path="/register">
                 <Register/>
             </Route>
             <Route path="/">
                 <Home/>
             </Route>
         </Switch>
     </div>
   </Router>
  );
}

export default App;
