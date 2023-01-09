import React from 'react'
import "./TaskAddInput.css";
const TaskAddInput = ({inputText,setInputText, taskList, setTaskList}) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(e);
    // Enter押される→カードが追加されたとき
    setTaskList([
    ...taskList,
      { 
        text : inputText,
      }
    ]);
    setInputText("");
  }
  const handleChange = (e) => {
    setInputText(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add a task' onChange={handleChange} value={inputText} />
      </form>

    </div>
  )
}

export default TaskAddInput