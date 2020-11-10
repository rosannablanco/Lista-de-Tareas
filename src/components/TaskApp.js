import {useEffect, useReducer} from 'react';
import {toDoReducer} from './toDoReducer';
import '../taskApp.scss';
import ToDoList from './ToDoList';
import FormAdd from './FormAdd';

const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem('toDos')) || [];
};

function TaskApp() {
  const [state, dispatch] = useReducer(toDoReducer, initialState, init);
  useEffect(() => {
    return localStorage.setItem('toDos', JSON.stringify(state));
  }, [state]);

  const addToDo = (newToDo) => {
    dispatch({
      type: 'add',
      payload: newToDo,
    });
  };
  const deleteToDo = (toDoId) => {
    dispatch({
      type: 'delete',
      payload: toDoId,
    });
  };
  const doneToDo = (toDoId) => {
    dispatch({
      type: 'done',
      payload: toDoId,
    });
  };

  return (
    <div className="TaskApp">
      <header className="TaskApp-header">
        <h1>Lista de Tareas ({state.length})</h1>
      </header>
      <main className="TaskApp-container">
        <FormAdd addToDo={addToDo} />
        {state.length > 0 && <ToDoList state={state} deleteToDo={deleteToDo} doneToDo={doneToDo} />}
      </main>
    </div>
  );
}

export default TaskApp;
