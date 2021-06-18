import React, { useState, useEffect } from "react";

function App(props) {

  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const getTodos = () => {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/ernestoleonidas")
      .then(r => r.json())
      .then(data => setTasks(data))
    }
    getTodos()
    /*
    const putTodos = () => {
      fetch('https://assets.breatheco.de/apis/fake/todos/user/ernestoleonidas', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
    }*/
  }, []);

  return (
  <div className="col-6 container">
      <div className="row bg-light text-center py-3">
        <h1 className="text-center"> ToDos API </h1>
      </div>
      <div className="row my-3">
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">Tarea</span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="Ingrese su tarea acá"
            name="label"
            onKeyUp={e =>
              //listen to the key up and wait for the return key to be pressed (KeyCode === 13)
              e.keyCode === 13 &&
              setTasks(tasks.concat({ label: e.target.value, done: false }))
            }
          />
        </div>

      </div>
      <div className="row">
        <div className="container">
          <ul className="list-group">
            {/* <li className="list-group-item active" aria-current="true">An active item</li> */}
            {tasks === null
              ? "Loading..."
              : tasks.map((item, index) => { 
                return(
                  <li className="row list-group-item d-inline-flex align-items-center" key={index}>
                  <div className="col-10" >{item.label} </div>
                  <div className="col-1 btn">
                    {item.done ? 
                      <span type="button" className="btn btn-success fas fa-check text-end"></span>
                      : 
                      <span type="button" className="btn btn-danger fas fa-times text-end"></span>
                    }
                  </div>
                </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;