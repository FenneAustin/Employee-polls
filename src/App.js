
import React, {useState} from "react"
import {useSelector} from "react-redux"
import * as sessionActions from "./store/session"
import { Routes, Route } from 'react-router-dom';
import LoginScreen from "./screens/LoginScreen/index.js"
import LandingScreen from "./screens/LandingScreen/index.js";


function App() {

  const sessionUser = useSelector(state => state.session.user);


  return (
    <Routes>
      { !sessionUser &&
        <Route exact path="/" element={<LoginScreen />} />
      }
      {
        sessionUser &&
        <Route path="/" element={<LoginScreen />} />
      }
    </Routes>
  );
}

export default App;
