import './Content.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import About from '../../views/examples/About'
import NotFound from '../../views/examples/NotFound'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route exact path="/Home" element={<Home />} />
            <Route path="/Param/:id" element={<Param />} />
            <Route path="/About" element={<About />} />   
            <Route path="*" element={<NotFound />} />            
        </Routes>
    </main>
)

export default Content