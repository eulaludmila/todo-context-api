import { TodoContext } from '../../context/TodoContext';
import { useContext, useState } from 'react';
import { FiX } from "react-icons/fi";

export default function TodoList() {
    const { todo, removeTodo, checkTodo } = useContext(TodoContext);

    function handleRemoveTodo(index) {
        removeTodo(index);
    }

    function handleCheckTodo(e, index) {
        checkTodo(index);
    }


    return (
        <>
            {
                todo.length !== 0 &&
                
                <div className="todo-table">
                    <div className="list">
                        METAS 2021
                    </div>
                    <div className="list-body">


                        {
                            todo.map((item, index) => (
                                <div className={`row ${item.check && "check"}`} key={index}>

                                    {
                                        item.check ?
                                            <div>
                                                <input type="checkbox" onChange={(e) => handleCheckTodo(e, index)}/>
                                            </div>
                                            :

                                            <div>
                                                <input type="checkbox" onChange={(e) => handleCheckTodo(e, index)}/>
                                            </div>
                                    }

                                    <div>
                                        {item.tarefa}
                                    </div>
                                    <div>
                                        <FiX size={20} style={{ marginLeft: "10px", cursor: 'pointer' }} onClick={() => handleRemoveTodo(index)} />

                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>
            }
        </>
    )
}
