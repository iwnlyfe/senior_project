import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
// Page
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from './pages/home';
import HomeAdmin from './pages/admin/HomeAdmin';
import ProductView from "./pages/mainehome/product/ProductView";
import HomeUser from './pages/user/HomeUser';
import ManagaAdmin from './pages/admin/ManageAdmin';
// Layout
import Header from './components/layout/Header';
// functions
import { currentUser } from './functions/auth';
// redux
import { useDispatch } from 'react-redux';
// Routes
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import ProductCreate from './pages/mainehome/product/ProductCreate';
import ProductUpdate from './pages/mainehome/product/ProductUpdate';

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
      <Route
          path="/user/index"
          element={
            <UserRoute>
              <HomeUser />
            </UserRoute>
          }
        />
        <Route path='/admin/index' element={
          <AdminRoute>
            <HomeAdmin />
          </AdminRoute>
        } />
        <Route path='/admin/manage-admin' element={
          <AdminRoute>
            <ManagaAdmin />
          </AdminRoute>
        } />
        <Route path='user/productview' element={
        <UserRoute>
          <ProductView />
        </UserRoute>
      }/>
      <Route path='user/productcreate' element={
        <UserRoute>
          <ProductCreate />
          </UserRoute>
      }/>
      <Route path='user/productupdate' element={
        <UserRoute>
          <ProductUpdate />
        </UserRoute>
      }/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;