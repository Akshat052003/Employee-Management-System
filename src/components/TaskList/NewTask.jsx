import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 p-5 w-[300px] bg-red-500 rounded-xl '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded-md text-sm'>{data.category}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-3'>{data.taskDescription}</p>
        <div className='mt-4'>
            <button className='py-1 px-2 bg-blue-500 text-sm rounded-md'>Accept Task</button>
        </div>

      </div>
  )
}

export default NewTask