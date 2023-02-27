import React from 'react'

function Button(props) {
  return (
    <div>
        <button onClick={props.addTasks} className= 'p-1.5 my-2 font-thin text-left text-white hover:bg-gray-900 bg-black rounded shadow-lg'>AddTask</button>
    </div>
  )
}

export default Button