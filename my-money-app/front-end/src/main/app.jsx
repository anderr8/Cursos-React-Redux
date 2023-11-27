import React from 'react'
import '../common/template/dependencies'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

import Routes from './routes'

export default props => (
    <div className='wrapper'>
        {/* <h1>App</h1> */}
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            {/* <h1>Conteúdo</h1> */}
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)