import React, {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
// Page
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login"
import Home from './pages/home'
import HomeAdmin from './pages/admin/HomeAdmin';
import HomeUser from './pages/user/HomeUser';
// Layout
import Header from './components/layout/Header';
// functions
import {currentUser} from './functions/auth'
// redux
import {useDispatch } from 'react-redux'

function App() {
  const dispatch =  useDispatch()
  const idtoken = localStorage.token
  if (idtoken){
    currentUser(idtoken)
    .then(res => {
      console.log(res.data.username);
      dispatch({type: 'LOGIN',
        payload: {
          token: idtoken,
          username: res.data.username,
          role: res.data.role
        }
      });
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/user/index' element={<HomeUser />} />
        <Route path='/admin/index' element={<HomeAdmin />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;