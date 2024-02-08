// // Navegação com React-router

// import React from 'react'
// import { Router, Route, Redirect, hashHistory } from 'react-router'

// import App from './app'
// import Dashboard from '../dashboard/dashboard'
// // import Dashboard2 from '../dashboard2/dashboard2'
// import BillingCycle from '../billingCycle/billingCycle'

// export default props => (
//     <Router history={ hashHistory }>
//         <Route path='/' component={ Dashboard } />
//         {/* <Route path='/' component={ Dashboard2 } /> */}
//         <Router path='/billingCycles' component={ BillingCycle } />
//         <Redirect from='*' to='/' />
//     </Router>
// )



// Navegação com React-router (Versão 2)

import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

// import App from './app'
import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={ hashHistory }>
        <Route path='/' component={ AuthOrApp }>
            <IndexRoute component={ Dashboard } />
            <Route path='billingCycles' component={ BillingCycle } />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)