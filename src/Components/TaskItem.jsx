import React from 'react'
import { MdCancel } from 'react-icons/md';
import { AiFillCheckSquare } from 'react-icons/ai';


function TaskItem(props) {
  return (
   <div className='flex flex-col p-1'>
    <li className='flex items-center justify-between w-full h-10 bg-white border border-gray-200 rounded shadow-md'>
        <div className='flex items-center'>
            <button 
            onClick={()=>{props.completeTask(props.id)}} className= {props.completed && 'text-green-700'}><AiFillCheckSquare className='m-2 text-3xl'/>
            </button>
            <p className=  {props.completed && "line-through"}>
              {props.title}
            </p>
        </div>
        <button 
        onClick={()=>{props.deleteTask(props.id)}}>
            <MdCancel className='m-2 text-3xl hover:text-red-900'/>
        </button>
    </li>
    </div>
  )
}

export default TaskItem