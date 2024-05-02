import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  Navigate
} from "react-router-dom";

import './App.css'
import Home from './Component/Home';
import About from './Component/About';
import Page404 from './Component/Page404';
import User from './Component/User';
import Filter from './Component/Filter';


function App() {
 

  return (
    <>
    <Router>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      {/* Routing with params */}
      <Route path="/user/:name" element={<User/>}></Route>  
      <Route path='/Filter' element={<Filter/>}></Route> 
     {/* <Route path='/*' element={<Page404/>}></Route> */} 
     <Route path='/*' element={<Navigate to="/" />} />    
     {/* is method sai hamai 404page banania ki jarurath nahi hogi */}
     </Routes>
    </Router> 
      
    </>
  )
}

export default App
