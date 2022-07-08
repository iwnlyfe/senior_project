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
import ZoneView from './pages/mainehome/zone/ZoneView';
import ProductDetailView from './pages/mainehome/productdetail/ProductDetailView';
import ShelfView from './pages/mainehome/shelf/ShelfView';
import DisbursementView from './pages/mainehome/disbursement/DisbursementView';
import ZoneCreate from './pages/mainehome/zone/ZoneCreate';

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
        <Route path='/productview' element={
        <UserRoute>
          <ProductView />
        </UserRoute>
      }/>
      <Route path='/productcreate' element={
        <UserRoute>
          <ProductCreate />
          </UserRoute>
      }/>
      <Route path='/productupdate' element={
        <UserRoute>
          <ProductUpdate />
        </UserRoute>
      }/>
      <Route path='/zoneview' element={
        <UserRoute>
          <ZoneView />
        </UserRoute>
      }/>
      <Route path='/zonecreate' element={
        <UserRoute>
          <ZoneCreate />
        </UserRoute>
      }/>
      <Route path='/productdetailview' element={
        <UserRoute>
          <ProductDetailView />
        </UserRoute>
      }/>
      <Route path='/shelfview' element={
        <UserRoute>
          <ShelfView />
        </UserRoute>
      }/>
      <Route path='/disbursementview' element={
        <UserRoute>
          <DisbursementView />
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