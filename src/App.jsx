import { Fragment, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AddOrderPage from './pages/AddOrderPage'
import OrdersPage from './pages/OrdersPage'
import EditOrderPage from './pages/EditOrderPage'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/' exact element={<LoginPage />}/>
        <Route path='/login' exact element={<LoginPage />}/>
        <Route path='/signup' exact element={<SignupPage />}/>
        <Route path='/orders/create' exact element={<AddOrderPage />}/>
        <Route path='/orders/all' exact element={<OrdersPage />}/>
        <Route path='/orders/edit/:orderId' exact element={<EditOrderPage />}/>
      </Routes>
    </Fragment>
  )
}

export default App
