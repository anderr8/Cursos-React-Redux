import React from 'react'
import IconButton from '../template/iconButton'


// export default props => (
//     <div>
//         <h1>List</h1>
//     </div>
// )

// export default props => {
//     const renderRows = () => {
//         // return (
//             //     <tr><td>ok</td></tr>
//             // )
//         const list = props.list || []
//         return list.map(todo => (
//             <tr key={todo._id} >
//                 <td className={todo.done ? 'markedAsDone' : ''} >{todo.description}</td>
//                 <td>
//                     <IconButton style='success' icon='check' hide={todo.done}
//                         onClick={() => props.handleMarkAsDone(todo)} >
//                     </IconButton>
//                     <IconButton style='warning' icon='undo' hide={!todo.done}
//                         onClick={() => props.handleMarkAsPending(todo)} >
//                     </IconButton>
//                     <IconButton style='danger' icon='trash-o' hide={!todo.done}
//                         onClick={() => props.handleRemove(todo)}>
//                     </IconButton>
//                 </td>
//             </tr>
//         ))
//     }
//     return (
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>Descrição</th>
//                     <th className='tableActions' >Ações</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {renderRows()}
//             </tbody>
//         </table>
//     )
// }

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {
    const renderRows = () => {
        // return (
            //     <tr><td>ok</td></tr>
            // )
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id} >
                <td className={todo.done ? 'markedAsDone' : ''} >{todo.description}</td>
                <td>
                    {/* <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)} ></IconButton> */}
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)} ></IconButton>
                    {/* <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)} ></IconButton> */}
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)} ></IconButton>
                    {/* <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}></IconButton> */}
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)} ></IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions' >Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)