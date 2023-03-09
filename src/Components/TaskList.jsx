import React from 'react'

function TaskList(props) {
  return (
    <div className='p-2 my-2 overflow-auto h-96'>
    <ul>
       {props.children}
    </ul>
    </div>
    
  )
}

export default TaskList 