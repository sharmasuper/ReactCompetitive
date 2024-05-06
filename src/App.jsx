import { createContext, useReducer, useState } from 'react'
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
import CounterThree from './Component/CounterThree';
import ComponentA from './Component/ComponentA';
import ComponentB from './Component/ComponentB';
import DataFetchingOne from './NestedRoutes/DataFetchingOne';
import DataFetchingTwo from './NestedRoutes/DataFetchingTwo';
export const CountContext = createContext()
const initialState = 0


function App() {
 
  
  return (
   <>
  {/* <DataFetchingOne/> */}
  <DataFetchingTwo/>
   </>
  )
}

export default App
