import React from 'react'
import Task from './Task'

const Tasks = ({inputText, taskList}) => {
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Task task={task} />
        </div>
      ))}
    </div>
  )
}

export default Tasks
