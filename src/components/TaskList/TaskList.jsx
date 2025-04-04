import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  // console.log(data)
  return (
    <div id='tasklist' className='h-[55%] flex flex-nowrap overflow-x-auto items-center justify-start gap-5 w-full py-5 mt-10'>
      {data.tasks.map((elem,index) => {
        if(elem.active){
          return <AcceptTask key = {index} data = {elem}/>
        }
        if(elem.newTask){
          return <NewTask key={index} data = {elem} />
        }
        if(elem.completed){
          return <CompletedTask key={index} data = {elem} />
        }
        if(elem.failed){
          return <FailedTask key={index} data = {elem} />
        }
      })}

     {/* <AcceptTask/>
     <NewTask/>
     <CompletedTask/>
     <FailedTask/> */}
    </div>
  )
}

export default TaskList