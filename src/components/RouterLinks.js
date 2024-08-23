import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Features from '../Pages/Features.js'
import Home from '../Pages/Home.js'
import SignIn from '../Pages/SignIn'
import Signup from '../Pages/SignUp'
import './RouterLinks.css'
// import { FontAwesomeIcon } from ''
// import { faLock } from ''

const RouterLinks = () => {
  return (
    <Router>
      <div className='container'>
             <nav className='nav' id='navbar'>
                <ul id='navul'>
                    <li>
                        <div id='item1'>
                            <Link to="/">Music</Link>
                        </div>
                    </li>    
                    <li>
                        <div  id='item2'>
                            <li>
                                <Link to="/" id='item2a'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" id='item2b'>About</Link>
                            </li>
                            <li>
                                <Link to="/features" id='item2c'>Features</Link>
                            </li>
                            <li>
                                <Link to="/contact" id='item2d'>Contact</Link>
                            </li>
                        </div>
                    </li>
                    <li>
                        <div  id='item3'>
                            <li>
                            <button id='SignIn-btn'><Link to="/SignUp"></Link></button>
                            </li> 
                            <li>                
                            <button id='SignUp-btn'><Link to="/SignIn">SignUp</Link></button>
                            </li>   
                        </div>
                    </li>    
                </ul>
            </nav>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/About' element={<About/>} ></Route>
            <Route path='/Features' element={<Features/>} ></Route>
            <Route path='/Contact' element={<Contact/>} ></Route>
            <Route path='/SignIn' element={<SignIn/>} ></Route>
            <Route path='/SignUp' element={<Signup/>} ></Route>
        </Routes>
    </Router>
  )
}

export default RouterLinks