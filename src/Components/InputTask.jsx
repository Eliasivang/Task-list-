import React from 'react'

function InputTask(props) {
    const onChangeValue = (e) =>{
       props.setTask(e.target.value);   
    }

    
  return (
    <>
        <input className='h-12 p-2 my-2 border rounded shadow-md' 
        autoFocus 
        placeholder='Watch GoodFellas'
        onChange = {onChangeValue}
        value= {props.task}
         
        />
    </>
  )
}

export default InputTask