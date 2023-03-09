import React from 'react'
import { v4 as uuidv4 } from "uuid"


const TaskAddInput = ({
  inputText, setInputText, taskList, setTaskList
}) => {

  const handleSubmit = (e) => {
    const taskId = uuidv4();
    e.preventDefault()
    if (inputText === "") {
      return;
    }
    // カードを追加する
    setTaskList([
      ...taskList, {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      }
    ])
    setInputText('')
  }

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='add a task'
          className='taskAddInput'
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  )
}

export default TaskAddInput
