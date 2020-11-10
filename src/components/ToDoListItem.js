import React from 'react';

const ToDoListItem = ({toDo, index, deleteToDo, doneToDo}) => {
  return (
    <li className="TaskApp-list-item">
      <p className={`TaskApp-list-item-task ${toDo.done && 'complete'}`} onClick={() => doneToDo(toDo.id)}>
        {index + 1}. {toDo.task}
      </p>
      <button className="TaskApp-list-item-button" onClick={() => deleteToDo(toDo.id)}>
        Borrar
      </button>
    </li>
  );
};

export default ToDoListItem;
