import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Employee from './Components/Employee';
import Navbar from './Navbar';
import Post from "./Components/Post";

const RoutesVal = () => {
    return (
        <BrowserRouter>
            <Navbar />

            {/* react-router-dom v5 and below */}
            {/* <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/employee' component={Employee} /> */}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/employee/:post_id' element={<Post />} />
            </Routes>

        </BrowserRouter>

    )
}


export default RoutesVal;




