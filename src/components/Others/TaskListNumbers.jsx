import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='grid grid-cols-2 wm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6'>
        <div className='h-32 rounded-xl bg-red-400 py-8 px-6 text-white ${task.color} shadow-md'>
            <h2 className='text-4xl font-bold'>0</h2>
            <h3 className='text-xl font-medium mt-2'>Total Tasks</h3>
        </div>
        <div className='h-32 rounded-xl bg-blue-400 py-8 px-6 text-white ${task.color} shadow-md'>
            <h2 className='text-4xl font-bold'>0</h2>
            <h3 className='text-xl font-medium mt-2'>Total Tasks</h3>
        </div>
        <div className='h-32 rounded-xl bg-green-400 py-8 px-6 text-white ${task.color} shadow-md'>
            <h2 className='text-4xl font-bold'>0</h2>
            <h3 className='text-xl font-medium mt-2'>Total Tasks</h3>
        </div>
        <div className='h-32 rounded-xl bg-yellow-400 py-8 px-6 text-white ${task.color} shadow-md'>
            <h2 className='text-4xl font-bold'>0</h2>
            <h3 className='text-xl font-medium mt-2'>Total Tasks</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers


// import React from 'react';

// const TaskListNumbers = () => {
//   const tasks = [
//     { color: 'bg-red-400', label: 'Total Tasks', count: 0 },
//     { color: 'bg-blue-400', label: 'Completed Tasks', count: 0 },
//     { color: 'bg-green-400', label: 'Pending Tasks', count: 0 },
//     { color: 'bg-yellow-400', label: 'In Progress', count: 0 },
//   ];

//   return (
//     <div className="grid grid-cols-2 wm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6">
//       {tasks.map((task, index) => (
//         <div
//           key={index}
//           className={`h-32 rounded-xl py-8 px-6 text-white ${task.color} shadow-md`}
//         >
//           <h2 className="text-4xl font-bold">{task.count}</h2>
//           <h3 className="text-xl font-medium mt-2">{task.label}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskListNumbers;
