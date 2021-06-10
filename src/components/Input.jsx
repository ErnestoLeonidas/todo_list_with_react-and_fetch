import React, { useState } from 'react'

const InputToDo = (props) => {
    
    const initialToDo = { id: null, task: ''};
    const [task, setTask] = useState(initialToDo);

    const handlePressKey = (e) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }

    const onKeyUpValue = (e) => {
        if (e.key === 'Enter') {
            if (task.task.split(' ').join('') !== '') {
                props.addToDo(task)
                setTask(initialToDo)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                className="form-control form-control-lg" 
                type="text" 
                placeholder="Agregar" 
                name="task"
                //defaultValue={initialToDo}
                onChange={handlePressKey.bind(this)}
                //onKeyUp={onKeyUpValue.bind(this)}
                //onKeyUp={onKeyUpValue}
                onKeyPress={onKeyUpValue}
                value={task.task}
                autoComplete="off"
            />
        </form> 
    );
}

export default InputToDo;