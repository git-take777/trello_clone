import React, { useState } from 'react'
import "./TaskCardTitle.css";

const TaskCardTitle = () => {
  const [title, setTitle] = useState("today");
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
    // console.log(isClick);
  }

  const handleChange = (e) => {
    setTitle(e.target.value);
    // console.log(title);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  }

  const handleBlur = () => {
    setIsClick(false);
  }

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
    {isClick ? 
    (
    <form onSubmit={handleSubmit}>
      <input className='taskCardTitleInputInput' type="text" autoFocus onChange={handleChange} onBlur={handleBlur} value={title} maxLength={10} />
    </form>
    ) : (
      <h3>{title}</h3> 
      )
    }
    </div>
  )
}

export default TaskCardTitle