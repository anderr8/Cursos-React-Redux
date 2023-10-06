// import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

// export default props => {
//     const keyHandler = (e) => {
//         if (e.key === 'Enter') {
//             e.shiftKey ? props.handleSearch() : props.handleAdd()
//         } else if (e.key === 'Escape') {
//             props.handleClear()
//         }
//     }

//     return (
//         <div role='form' className='todoForm' >
//             {/* <div className='col-x-12 col-sm-9 col-md-10'>
//                 <input id='description' className='form-control' placeholder='Adicione uma tarefa'></input>
//             </div>

//             <div className='col-xs-12 col-sm-3 col-md-2'>
//                 <button className='btn btn-primary'>
//                     <i className='fa fa-plus'></i>
//                 </button>
//             </div>   */}

//             <Grid cols='12 9 10'>
//                 <input id='description' className='form-control'
//                     placeholder='Adicione uma tarefa'
//                     onChange={props.handleChange}
//                     onKeyUp={keyHandler}
//                     value={props.description} ></input>
//             </Grid> 

//             <Grid cols='12 3 2'>
//                 <IconButton style='primary' icon='plus'
//                     onClick={props.handleAdd} ></IconButton>
//                 <IconButton style='info' icon='search'
//                     onClick={props.handleSearch} ></IconButton>
//                 <IconButton style='default' icon='close'
//                     onClick={props.handleClear} ></IconButton>
//             </Grid>         
//         </div>
//     )
// }

import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, clear } from './todoActions'

// const TodoForm = props => {
//     const keyHandler = (e) => {
//         if (e.key === 'Enter') {
//             e.shiftKey ? props.handleSearch() : props.handleAdd()
//         } else if (e.key === 'Escape') {
//             props.handleClear()
//         }
//     }

//     return (
//         <div role='form' className='todoForm' >
//             {/* <div className='col-x-12 col-sm-9 col-md-10'>
//                 <input id='description' className='form-control' placeholder='Adicione uma tarefa'></input>
//             </div>

//             <div className='col-xs-12 col-sm-3 col-md-2'>
//                 <button className='btn btn-primary'>
//                     <i className='fa fa-plus'></i>
//                 </button>
//             </div>   */}

//             <Grid cols='12 9 10'>
//                 <input id='description' className='form-control'
//                     placeholder='Adicione uma tarefa'
//                     // onChange={props.handleChange}
//                     onChange={props.changeDescription}
//                     onKeyUp={keyHandler}
//                     value={props.description} ></input>
//             </Grid> 

//             <Grid cols='12 3 2'>
//                 <IconButton style='primary' icon='plus'
//                     onClick={props.handleAdd} ></IconButton>
//                 <IconButton style='info' icon='search'
//                     onClick={props.handleSearch} ></IconButton>
//                 <IconButton style='default' icon='close'
//                     onClick={props.handleClear} ></IconButton>
//             </Grid>         
//         </div>
//     )
// }

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, description } = this.props
        if (e.key === 'Enter') {
            // e.shiftkey ? this.props.handleSearch() : this.props.handleAdd()
            // e.shiftKey ? search(description) : add(description)
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            // this.props.handleClear()
            clear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='todoForm' >
                <Grid cols='12 9 10' >
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2' >
                    {/* <IconButton style='primary' icon='plus' 
                        onClick={this.props.handleAdd}></IconButton> */}
                    <IconButton style='primary' icon='plus' 
                        onClick={() => add(description) } />
                    {/* <IconButton style='info' icon='search' 
                        onClick={this.props.handleSearch}></IconButton> */}
                    {/* <IconButton style='info' icon='search' 
                        onClick={() => search(description) }></IconButton> */}
                    <IconButton style='info' icon='search'
                        onClick={search} />
                    {/* <IconButton style='default' icon='close' 
                        onClick={this.handleClear}></IconButton> */}
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)