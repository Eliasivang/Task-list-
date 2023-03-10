import React from 'react'
import {BsGithub} from "react-icons/bs"

function Footer() {
  return (
    <div className='absolute bottom-0 hidden w-full h-16 py-4 my-3 md:block'>
        <div className='flex justify-center '>
            <a href='https://github.com/Eliasivang' rel='noreferrer' target= "_blank" ><div className='flex items-center justify-center h-12 gap-2 rounded-2xl w-72 backdrop-blur-3xl'>
                <BsGithub className='text-4xl text-white'/>
                <p className='text-3xl font-light text-center text-white'>Elias Gonzalez</p>
            </div></a>
        </div>
    </div>
    
  )

}

export default Footer