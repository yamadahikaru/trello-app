import React from 'react'
import { v4 as uuidv4 } from "uuid"


const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuidv4();
    // タスクカードを追加する
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `imem${taskCardId}`,
      },
    ])
  }
  return (
    <div className="addTaskCardButtonArea">
      <button
        className="addTaskCardButton"
        onClick={addTaskCard}
      >+</button>
    </div>
  )
}

export default AddTaskCardButton
