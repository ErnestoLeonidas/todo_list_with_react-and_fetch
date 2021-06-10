import React from 'react'

const TodoList = (props) => {
    return (
        <table className="table">
            <thead className="text-center">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">To Do</th>
                    <th scope="col">Delate</th>
                </tr>
            </thead>
            <tbody className="text-center">

                {
                    props.toDo.length > 0 ?
                        props.toDo.map((todo) => (
                            <tr key={todo.id}>
                                <th scope="row">{todo.id}</th>
                                <td>{todo.task}</td>
                                <td>
                                    <button onClick={() => props.deleteToDo(todo.id)} type="button" className="btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Delate task">
                                        <i className="fas fa-trash" />
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr className="container text-center text-danger">
                                <td></td>
                                <td> <h1>No tasks for now</h1></td>
                                <td></td>
                            </tr>
                        )
                }
            </tbody>
        </table>
    );
}

export default TodoList;