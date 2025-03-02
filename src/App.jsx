import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { Navigate, Route, Routes } from 'react-router';
import Home from "./Home";
import About from "./About";
import Login from './Login';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';
import College from './College';
import Student from './Student'
import Department from './Department'
import Details from './Dedatils'
import First from './First'
import Markup from './Markup'
import State from './State'
import Toggle from './Toggle'

function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<First />} />
        <Route path="/markup" element={<Markup />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/college" element={<College />} >
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/state" element={<State />} />
        <Route path="/toggle" element={<Toggle />} />

        <Route path='/*' element={<PageNotFound />} />
        {/* redirect to login page if invalid url is opened in browser*/}
        {/* <Route path='/*' element={<Navigate to="/login" />} />*/}
      </Routes>  
    </>
  )
}

export default App
