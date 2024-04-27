import { Fragment, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/' exact element={<LoginPage />}/>
        <Route path='/signup' exact element={<SignupPage />}/>
      </Routes>
    </Fragment>
  )
}

export default App
