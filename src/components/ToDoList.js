import React from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({state, deleteToDo, doneToDo}) => {
  return (
    <ul className="TaskApp-list">
      {state.map((toDo, i) => (
        <ToDoListItem key={toDo.id} toDo={toDo} index={i} deleteToDo={deleteToDo} doneToDo={doneToDo} />
      ))}
    </ul>
  );
};

export default ToDoList;
