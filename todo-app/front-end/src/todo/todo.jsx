import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import '../style/todo.css'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        // Estado inicial do objeto:
        this.state = { description: '', list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            // .then(resp => console.log(resp.data))
            .then(resp => this.setState({...this.state,  description: '', list: resp.data}))
    }

    // Mudando o estado do objeto:
    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {
        // console.log(this.state.description)

        const description = this.state.description
        axios.post(URL, { description })
            // .then(resp => console.log("Funcionou!"))
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}