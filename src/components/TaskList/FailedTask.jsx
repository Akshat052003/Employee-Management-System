import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 p-5 w-[300px] bg-green-500 rounded-xl '>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 px-3 py-1 rounded-md text-sm'>{data.category}</h3>
      <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-3'>{data.taskDescription}</p>
    <div className='mt-4'>
        <button className='w-full px-2 py-1 bg-red-500'>Failed</button>
    </div>

  </div>
  )
}

export default FailedTask