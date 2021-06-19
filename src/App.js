import React, { useState, useEffect } from "react";

function App(props) {

  const [task, setTasks] = useState(null);

  useEffect(() => {
    const getTodos = () => {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/ernestoleonidas")
      .then(r => r.json())
      .then(data => {
        if (data.msg){
          createUser();
        } else {
          console.log(data);
          setTasks(data);
        }  
      })
    }
    getTodos()

    const createUser = () => {
      fetch('https://assets.breatheco.de/apis/fake/todos/user/ernestoleonidas', {
        method: "POST",
        body: JSON.stringify([]),
        headers: {
            "Content-Type": "application/json"
        }
      })
      .then(resp => {
          console.log("create user : "+resp.ok);
          return resp.json();
      })
      .then(data => {
          setTasks(data);
      })
      .catch(error => {
          console.log(error);
      });
    }


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
  }, [])

  function addNewTask(){
    const addTask = () =>{
      fetch('https://assets.breatheco.de/apis/fake/todos/user/ernestoleonidas', {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
      })
      .then(resp => {
        console.log("add task : "+resp.ok);
        return resp.json();                    
      })
      .then(data => {
        console.log(data) 
      })
      .catch(error => {
        console.log(error);
      });
    }
    addTask()
  }

  function addtarea(e) {
    if (e.key === "Enter" && e.target.value !== "" && task!=="") {
      let nt = [...task];
      let ne = {
          label: e.target.value,
          done: false
      }
      let ntasks=nt.concat(ne);
          setTasks(ntasks);          
          e.target.value = "";

      console.log('mi task :' + task);
      addNewTask()
    }
  }

  function deleteTask(e) {
    let task_updated=[];
    task.map((elem,index)=>{
      if(index!==e){
          task_updated.push(elem);
      }
      return task_updated;
    })
    setTasks(task_updated)


  }

  function deleteAll(){
    const deleteAllTasks= ()=>{
      fetch('https://assets.breatheco.de/apis/fake/todos/user/ernestoleonidas', {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => {
          //console.log(resp.text());
          return resp.json();
      })
      .then(data => {
          console.log(data)
          //setTasks([])
      })
      .catch(error => {
          console.log(error);
      });
    }
    deleteAllTasks();
    setTasks([])
  }

  
  return (
  <div className="col-6 container">
      <div className="row bg-light justify-content-center py-3">
        <h1> ToDos API with fetch</h1>
      </div>
      <div className="row my-3">
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">Task</span>
          <input 
            className="form-control col-12 p-2" 
            placeholder="add task" 
            onKeyUp={addtarea} />
        </div>
      </div>
      <div className="row">
        <div className="container">
          <ul className="list-group">
            {/* <li className="list-group-item active" aria-current="true">An active item</li> */}
            {task === null
              ? "Loading..."
              : task.map((item, index) => { 
                return(
                  <li className="row list-group-item d-inline-flex align-items-center" id={index} key={index}>
                  <div className="col-10" >{item.label} </div>
                  <div className="col-1 btn">
                    {item.done ? 
                      <span type="button" className="btn btn-success fas fa-check text-end" onClick={()=> deleteTask(index)}></span>
                      : 
                      <span type="button" className="btn btn-danger fas fa-times text-end" onClick={()=> deleteTask(index)}></span>
                    }
                  </div>
                </li>
                )
              }
            )}
          </ul>
        </div>
        <div className="col d-flex justify-content-center"> 
          <button type="button" className="btn btn-warning mt-2" onClick={deleteAll}>Borrar Todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;