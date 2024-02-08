// Navegação com React-router

// import React from 'react'

// export default props => (
//     <div>
//         <h1>Dashboard</h1>
//     </div>
// )



// import React, { Component } from 'react'

// import ContentHeader from '../common/template/contentHeader'
// import Content from '../common/template/content'
// import ValueBox from '../common/widget/valueBox'
// import Row from '../common/layout/row'

// class Dashboard extends Component {
//     render()  {
//         return (
//             <div>
//                 <ContentHeader title='Dashboard' small='Versão 1.0' />
//                 <Content>
//                     {/* Dashboard */}
//                     <Row>
//                         <ValueBox cols='12 4' color='blue' icon='bank'
//                             value='R$10' text='Total de Créditos' />
//                         <ValueBox cols='12 4' color='red' icon='credit-card'
//                             value='R$10' text='Total de Débitos' />
//                         <ValueBox cols='12 4' color='green' icon='money'
//                             value='R$0' text='Valor Consolidado' />
//                     </Row>
//                 </Content>
//             </div>
//         )
//     }
// }

// export default Dashboard

// Integrando Dashboard com Redux (Parte 1)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import { getSummary } from './dashboardActions'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='blue' icon='bank'
                            value={ `R$ ${ credit }` } text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={ `R$ ${ debt }` } text='Total de Débitos' />
                        <ValueBox cols='12 4' color='green' icon ='money'
                            value={ `R$ ${ credit - debt }` } text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
