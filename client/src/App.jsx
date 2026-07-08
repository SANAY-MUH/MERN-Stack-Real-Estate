import { useState } from 'react'
import {Routes, Route} from 'react-router'
import Home from './pages/Home'
import Signin from './pages/signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/sign-in' element = {<Signin/>} />
        <Route path='/sign-up' element = {<Signup/>} />
        <Route path='/profile' element = {<Profile/>} />
        <Route path='/about' element = {<About/>} />
      </Routes>
    </>
  )
}

export default App
