import React from 'react'

const TaskCardDeleteButton = ({ taskCard, setTaskCardsList, taskCardsList }) => {
  const taskCardDeleteButton = (id) => {
    // タスクカードを削除
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id))

  }

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
