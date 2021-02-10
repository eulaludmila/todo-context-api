import logo from './logo.svg';
import './App.css';
import FormToast from './components/FormToast'
import TodoProvider from './context/TodoContext';
import TodoList from './components/Todo';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <TodoProvider>
      <div className="main">
        <FormToast />
        <TodoList/>
        <ToastContainer/>
      </div>
    </TodoProvider>
  );
}

export default App;
