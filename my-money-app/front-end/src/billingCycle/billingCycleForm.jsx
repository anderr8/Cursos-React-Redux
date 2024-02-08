// BillingCycleForm com Redux-Form (Parte 01)
// BillingCycleForm com Redux-Form (Parte 02)
// Adicionando o Campo Status no ItemList
// Integrar Soma de Créditos e Débitos

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
// import CreditList from './itemList'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    // Total = t
    // Valor = v
    // Soma = sum

    calculateSummary() {
        const sum = (t, v) => t + v
        return { 
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts} = this.calculateSummary()
        // console.log(handleSubmit)
        return (
            <form role='form' onSubmit={ handleSubmit }>
                <div className='box-body'>
                    <Field name='name' component={ LabelAndInput } readOnly={ readOnly }
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={ LabelAndInput } type='number' readOnly={ readOnly }
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={ LabelAndInput } type='number' readOnly={ readOnly }
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                    {/* <Summary credit={ 1000 } debt={ 100 } /> */}
                    <Summary credit={ sumOfCredits } debt={ sumOfDebts } />
                    {/* <CreditList cols='12 6' list={ credits } readOnly={ readOnly } /> */}
                    <ItemList cols='12 6' list={ credits } readOnly={ readOnly }
                        field='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={ debts } readOnly={ readOnly }
                        field='debts' legend='Débitos' showStatus={ true } />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={ `btn btn-${ this.props.submitClass }` }>
                        { this.props.submitLabel }
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={ this.props.init }>Cancelar</button>
                </div>
            </form>
        )
    }
}

// export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ 
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
// export default connect(null, mapDispatchToProps)(BillingCycleForm)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)