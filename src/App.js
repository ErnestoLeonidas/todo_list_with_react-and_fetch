import React, { useState, useEffect } from "react";

function App(props) {

  const [tasks, setTasks] = useState(null);
  //this function useEffect will run only one time, when the component is finally lodaded the first time.
  useEffect(
    () =>
      // here i fetch my todos from the API
      fetch("https://assets.breatheco.de/apis/fake/todos/user/ernestoleonidas")
        .then(r => r.json()) //convert incoming JSON formated response into an object
        .then(data => setTasks(data)), //here it re-set the variable tasks with the incoming data
    [] // <---- thanks to this empty array the use effect will be called only once
  );

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
                  <div className="col-2 btn"><span type="button" className="far fa-trash-alt text-end btn"></span></div>
                </li>
                )
              }

              // <li>
              //   {item.label} ({item.done ? "done" : "not done"})
              // </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;