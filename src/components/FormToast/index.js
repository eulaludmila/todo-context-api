import { useContext, useState } from 'react';
import {TodoContext} from '../../context/TodoContext';
import styled from 'styled-components'
import { BsFillPlusSquareFill } from "react-icons/bs";

const Input = styled.input`

    width: 100%;
    height: 40px;
    outline: 0;
    border-radius: 4px;
    border: solid 1px #c4c4c4;
    margin-bottom: 15px;
    padding: 10px 15px;
    box-sizing: border-box;

`;


const FormToast = () => {

    const initialValues = {
        tarefa: "",
    };

    const { saveTodo } = useContext(TodoContext);
    const [form, setForm] = useState(initialValues);

    function handleSubmit(){

        saveTodo(form);
        setForm(initialValues);
    }
    
    function handleChange(e){

        setForm({...form, [e.target.name]: e.target.value});  
    }

    return (
        <form>
            <Input value={form.tarefa} onChange={(e) => handleChange(e)} name="tarefa" type="text" placeholder="Digite aqui sua tarefa"/>
            <BsFillPlusSquareFill size={30} onClick={handleSubmit} style={{cursor:'pointer'}}/>
        </form>
    )
}

export default FormToast;