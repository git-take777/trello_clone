import React from 'react'
import "./Task.css";
const Task = ({task}) => {
  return (
    <div className='taskBox'>
      <p className='taskText'>
        {task.text}
      </p>
      
      <button className='trashNameButton'>
      <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  )
}

export default Task
