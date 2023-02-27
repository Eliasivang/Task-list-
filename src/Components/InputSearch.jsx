import React from 'react'


function InputSearch(props) {
    const onSearchValue = (e)=> {
        const searchValue = e.target.value;
        props.setSearch(searchValue);
    } 
  return (
    <div>
        <input className='w-full h-12 my-2 text-center border rounded shadow-md'
            placeholder='Search a Task..'
            value={props.search}
            onChange = {onSearchValue}
        />
    </div>
  )
}

export default InputSearch