import React from 'react'
import Task from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const reorder = (taskList, startIndex, endIndex) => {
  //タスクの並び替え操作
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
}

export const Tasks = ({ inputText, taskList, setTaskList }) => {
  const handleDragEnd = (res) => {
    reorder(taskList, res.source.index, res.destination.index)
    setTaskList(taskList);
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList?.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

