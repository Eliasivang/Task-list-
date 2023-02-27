
import TaskItem from './Components/TaskItem';
import TaskList from './Components/TaskList';
import TaskCounter from './Components/TaskCounter';
import Error from './Components/Error';
import InputTask from './Components/InputTask';
import InputSearch from './Components/InputSearch';
import Stitle from './Components/Stitle';
import Button from './Components/Button';
import Title from './Components/Title';
import  tasksImg from './assets/img/tasks.svg'
import Footer from './Components/Footer';
import './App.css';
import { useState } from 'react';


function App() {

  const [task, setTask] = useState('');
  const [search, setSearch] = useState('');
  const [tasks,setTasks] = useState([]);
  const taskLength = tasks.length;
  const taskCompleted = tasks.filter(task=> !!task.completed).length;

 

 

 


  
  let searchedTasks = [];
    if(!search.length >=1 ){
      searchedTasks = tasks;
    } else {
      searchedTasks = tasks.filter(task => {
        const taskText = task.title.toLowerCase(); 
        const searchText = search.toLowerCase();
          return taskText.includes(searchText);     
      })
    }

    const addTasks = ()=> {  //creamos un variable que contenga un objeto y que ttenga el valor de la task que tipiamos en el input.
        if(task.length<1) return // hacemos un early return para que si la longitud del texto  
      const newTasks = [...tasks] 
      newTasks.push({
        id: Math.random(),
        title: task,
        completed :false
      })
      setTasks(newTasks);
      setTask('');
    }


    const completeTask = (id) => {
      const taskIndex = tasks.findIndex((task)=> task.id === id)
      const newTasks = [...tasks];
      
      if(!!newTasks[taskIndex].completed){
        newTasks[taskIndex].completed =false;

          }else newTasks[taskIndex].completed =true;
        
          setTasks(newTasks);
    }

    const deleteTask =  (id) => {
      const updatedTasks = tasks.filter((task) =>task.id != id);
      setTasks(updatedTasks);
    }

  
    console.log(tasks);
  
  return (
    <div className="App">
          
          <Title/>
          <div className='justify-center inline-block gap-5 mx-2 my-10 sm:my-16 sm:flex sm:m-0'>
              <div className='flex flex-col w-full sm:w-1/3'>
                  <Stitle/>
                  <InputTask 
                  setTask={setTask} 
                  task= {task}/>
                  <Button addTasks={addTasks} task={task}/>
                  <img className='hidden m-auto sm:block sm:h-80 sm:w-80 ' src={tasksImg}/>
              </div> 
              <div className='flex flex-col w-full sm:w-1/3 bg-opacity-60'>
                  <TaskCounter 
                  taskLength={taskLength} 
                  taskCompleted={taskCompleted}/>
                  <InputSearch 
                  search= {search} 
                  setSearch={setSearch} 
                  task= {tasks} />
                  {searchedTasks.length === 0 && search.length >= 1 && <Error/>}
                <TaskList 
                task= {task}> 
                    {searchedTasks.map(task =>(
                          <TaskItem 
                          key={task.id} 
                          id={task.id} 
                          title={task.title} 
                          completed={task.completed} 
                          completeTask={completeTask}
                          deleteTask ={deleteTask}
                          />))}
                </TaskList>        
              </div>
         </div>
         <Footer/>
    </div>
  );
}

export default App;
