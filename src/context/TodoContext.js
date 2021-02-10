import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify'

export const TodoContext = createContext(null);
const {Provider} = TodoContext;

const TodoProvider = props => {

    const [todo, setTodo] = useState([
        {
            tarefa: "Callback and Memo",
            check:false
        },
        {
            tarefa: "Redux",
            check:false
        },
        {
            tarefa: "Context API",
            check:false
        },
    ]);

    function saveTodo(info){
        const arrayInfo = {
            tarefa: info.tarefa,
        }

        setTodo([...todo, arrayInfo]);
    }

    function removeTodo(index){
        todo.splice(index, 1);

        setTodo([...todo]);
        toast.error('Excluído com sucesso!')
    }

    function checkTodo(index) {
        todo[index].check = todo[index].check ? false : true;
        setTodo([...todo]);
        console.log(todo);
    }

    return(
        <Provider value={{todo ,saveTodo, removeTodo, checkTodo}}>
            {props.children}
        </Provider>
    )
}


export default TodoProvider;