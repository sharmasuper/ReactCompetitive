import { createContext, useState } from 'react'
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
import Contact from './Component/Contact';
import Company from './NestedRoutes/Company';
import Channel from './NestedRoutes/Channel';
import Other from './NestedRoutes/Other';
import Login from './Page/Login';
import ProtectRoute from './ProtectRoute/ProtectRoute';
import Inter from './Component/Inter';
import ComponentC from './Component/componentC';
import CounterOne from './Component/CounterOne';
import CounterTwo from './Component/CounterTwo';

export const UserContext = createContext()
 export const Channelcontext = createContext()
function App() {
 

  return (
    <>
     {/* <Inter/> */}
     {/* <UserContext.Provider value={"Vishvas"}>
      <Channelcontext.Provider value={"Mohit"}>
     <ComponentC/>
     </Channelcontext.Provider>
     </UserContext.Provider> */}
    <CounterOne/>
    <CounterTwo/>
    <Router>
     <Routes>
      {/* <Route path='/' element={<ProtectRoute Component={Home}/>}/>
     <Route path='/Login' element={<Login/>} />
     
      <Route path='/About' element={<ProtectRoute Component={About}/>}></Route> 
      
      {/* Routing with params */}
      {/* <Route path="/user/:name" element={<User/>}></Route>  
      <Route path='/Filter' element={<Filter/>}></Route>  */}

      {/* <Route path='/Contact/' element={<Contact/>}> */}
        {/* nested routing use <Outlet/> when write Link */}
      {/* <Route path='Company' element = {<Company/>}></Route> 
      <Route path='Channel' element = {<Channel/>}></Route> 
      <Route path='Other' element = {<Other/>}></Route>  */} 
     
       
      {/* </Route> */}


     {/* <Route path='/*' element={<Page404/>}></Route> */} 
     {/* <Route path='/*' element={<Navigate to="/" />} />     */}
     {/* is method sai hamai 404page banania ki jarurath nahi hogi */}
     </Routes>
    </Router> 
      
    </>
  )
}

export default App
