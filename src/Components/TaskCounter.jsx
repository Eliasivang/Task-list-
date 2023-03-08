import React from 'react'

function TaskCounter(props) {
  return (
    <>
        <p className='text-3xl font-light'>You have completed <span className='font-medium text-green-900'>{props.taskCompleted}</span> task of {props.taskLength} tasks</p>
    </>
  )
}

export default TaskCounter