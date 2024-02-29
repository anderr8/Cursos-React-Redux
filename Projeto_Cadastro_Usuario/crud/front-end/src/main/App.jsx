import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
// import { HashRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
// import Main from '../components/template/Main'
// import Home from '../components/home/Home'
import Routes from './Routes' 
import Footer from '../components/template/Footer'

// export default props =>
//     <HashRouter>
//         <div className="app">
//             <Logo />
//             <Nav />
//             {/* <Home /> */}
//             <Routes />
//             <Footer />
//         </div>
//     </HashRouter>


export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            {/* <Home /> */}
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>