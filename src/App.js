
import React, {useState} from "react"
import {useSelector} from "react-redux"
import * as sessionActions from "./store/session"
import { Routes, Route } from 'react-router-dom';
import LoginScreen from "./screens/LoginScreen/index.js"
import LandingScreen from "./screens/LandingScreen/index.js";
import HomeScreen from "./screens/HomeScreen/index.js";

function App() {

  const sessionUser = useSelector(state => state.session.user);


  return (
    <Routes>
      { !sessionUser &&
        <Route exact path="/" element={<LoginScreen />} />
      }
      {
        sessionUser &&
        <Route path="/" element={<HomeScreen />} />
      }
    </Routes>
  );
}

export default App;
