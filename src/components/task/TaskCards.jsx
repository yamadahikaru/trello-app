import React from 'react'
import TaskCard from './TaskCard'
import AddTaskCardButton from './button/AddTaskCardButton'
import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id: "0",
    draggableID: "item0"
  }]);

  const reorder = (taskCardsList, startIndex, endIndex) => {
    //タスクの並び替え操作
    const remove = taskCardsList.splice(startIndex, 1);
    taskCardsList.splice(endIndex, 0, remove[0]);
  }

  const handleDragEnd = (res) => {
    reorder(taskCardsList, res.source.index, res.destination.index)
    setTaskCardsList(taskCardsList);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index
            ) => (
                <TaskCard
                  key={taskCard.id}
                  taskCardsList={taskCardsList}
                  setTaskCardsList={setTaskCardsList}
                  taskCard={taskCard}
                  index={index}
                />
              ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

