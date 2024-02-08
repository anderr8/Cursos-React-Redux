// import '../common/template/dependencies'
// import React from 'react'
// import '../main/app.css'

// export default props => (
//     <div className='wrapper'>
//         <h1>App</h1>
//     </div>
// )

// import '../common/template/dependencies'
// import React from 'react'

// //import '../main/app.css'
// import Header from '../common/template/header'
// import SideBar from '../common/template/sideBar'
// import Footer from '../common/template/footer'
// import Routes from './routes'
// import Messages from '../common/msg/messages'

// export default props =>
// <div className='wrapper'>
//     <Header />
//     <SideBar />
//     <div className='content-wrapper'>
//         {/* <h1>Conteúdo</h1> */}
//         <Routes />
//     </div>
//     <Footer />
//     <Messages />
// </div>



// Navegação com React-router (Versão 2)

// import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            { props.children }
        </div>
        <Footer />
        <Messages />
    </div>
)