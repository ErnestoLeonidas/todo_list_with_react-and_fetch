import React, { useState } from 'react'
import InputToDo from "./components/Input";
import TodoList from './components/ListTodo';

function App() {

  const dataInicial = [{id: 1, tarea: 'Primera Tarea'}]
  const [listado, setListado]  = useState(dataInicial);

  const agregarTarea = (nuevaTarea) => {
    nuevaTarea.id = listado.length > 0 ? (listado[listado.length -1].id) + 1 : 1;
    setListado([...listado, nuevaTarea])
  }

  const borrarTarea = (id) => {
    setListado(listado.filter((listado) => listado.id !== id))
  }


  const toDoData = [
    {id: 1, task: 'Primero'}
  ]
  const [toDo, setToDo] = useState(toDoData);

  const addToDo = (newToDo) => {
    newToDo.id = toDo.length > 0 ? (toDo[toDo.length - 1].id) + 1 : 1;
    setToDo([ ...toDo, newToDo ])
  }
  
  const deleteToDo = (id) => {
    setToDo(toDo.filter((toDo) => toDo.id !== id))
  }

  /*
  return (
    <div className="container">
      <InputToDo 
        addToDo={addToDo}
      />
      <hr className="text-danger my-4"/>
      <TodoList 
        toDo={toDo}
        deleteToDo={deleteToDo}
      />
    </div>
  );*/

  return (
    <div className="d-flex justify-content-center align-items-center h-50 mt-5">
      <div className="row">
        <div className="col">
          <div className="text-center todos-title h1">
          todos
          </div>
          <div className="card">
            <div className="card-header">
              <InputToDo 
                addToDo={addToDo}
              />
            </div>
            <ul className="list-group list-group-flush">
              <TodoList 
                toDo={toDo}
                deleteToDo={deleteToDo}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;