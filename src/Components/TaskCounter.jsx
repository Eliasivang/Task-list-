import React from 'react'

function TaskCounter(props) {
  return (
    <>
        <p className='text-3xl font-light'>Has completado <span className='font-medium text-green-900'>{props.taskCompleted}</span> task de {props.taskLength} tasks</p>
    </>
  )
}

export default TaskCounter