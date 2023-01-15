import React from 'react'
import "./Task.css";
const Task = ({task, taskList, setTaskList}) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  
  return (
    <div className='taskBox'>
      <p className='taskText'>
        {task.text}
      </p>
      
      <button className='trashNameButton' onClick={() => handleDelete(task.id)}>
      <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  )
}

export default Task
