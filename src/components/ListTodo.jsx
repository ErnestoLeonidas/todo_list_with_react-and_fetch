import React, { useState } from 'react';

const TodoList = (props) => {

    const [isShown, setIsShown] = useState(false);

    const onMouseEnter = (e) =>{
        setIsShown(true);
    }
    const onMouseLeave = (e) =>{
        setIsShown(false);
    }

    return (
            props.toDo.length > 0 ?
            props.toDo.map((todo) => (
                <li 
                key={todo.id} 
                className="list-group-item"
                onMouseEnter={onMouseEnter.bind(this)}
                onMouseLeave={onMouseLeave.bind(this)}
                >
                    <div className="d-flex mx-auto">
                        <div className=" w-100">
                            {todo.task}
                        </div>
                        {isShown && (
                            <div className="flex-shrink-1">
                                    <i className="fas fa-times text-danger" 
                                    onClick={() => props.deleteToDo(todo.id)} 
                                    />
                            </div>
                        )}
                    </div>
                </li>
            )) : (
                <li className="list-group-item">
                    <div className="d-flex">
                        <div className="w-100">Sin todos</div>
                        <div className="flex-shrink-1">  
                        </div>
                    </div>
                </li>
            )
        
    );
}

export default TodoList;