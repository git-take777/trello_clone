import React from 'react'
import "./AddTaskCardButton.css"
import {v4 as uuid} from "uuid";

const AddTaskCardButton = ({taskCardsList, setTaskCardsList}) => {
  const TaskCardId = uuid();

  const addTaskCard = () => {
      // taskCardを追加する
      setTaskCardsList([
        ...taskCardsList,
        {
          id: TaskCardId,
          draggableId: `item${TaskCardId}`,
        },
      ]);
      console.log(taskCardsList);

  }
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={addTaskCard}>＋</button>
    </div>
  )
}

export default AddTaskCardButton