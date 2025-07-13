import React, { useRef } from 'react';

const TaskList = () => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.classList.add('cursor-grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto scrollbar-hide flex items-center gap-5 m-6 mt-20 cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      
      <div className='relative flex-shrink-0 rounded-md h-72 bg-red-400 w-72'>
        <div className='mt-4 absolute  w-full flex justify-between px-5 py-3'>
          <h3 className='bg-red-500 px-3 py-1 text-sm rounded'>High</h3>
          <h4 className='text-sm'>13 Jul 2025</h4>
        </div>
        <div className='pt-18 px-5 pb-2'>
          <h2 className='text-2xl font-bold'>Build a project website</h2>
          <p className='text-sm mt-4'>
            Task description goes here. This is a brief overview of the task. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className='relative flex-shrink-0 rounded-md h-72 bg-green-400 w-72'>
        <div className='mt-4 absolute  w-full flex justify-between px-5 py-3'>
          <h3 className='bg-red-500 px-3 py-1 text-sm rounded'>High</h3>
          <h4 className='text-sm'>13 Jul 2025</h4>
        </div>
        <div className='pt-18 px-5 pb-2'>
          <h2 className='text-2xl font-bold'>Build a project website</h2>
          <p className='text-sm mt-4'>
            Task description goes here. This is a brief overview of the task. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className='relative flex-shrink-0 rounded-md h-72 bg-blue-400 w-72'>
        <div className='mt-4 absolute  w-full flex justify-between px-5 py-3'>
          <h3 className='bg-red-500 px-3 py-1 text-sm rounded'>High</h3>
          <h4 className='text-sm'>13 Jul 2025</h4>
        </div>
        <div className='pt-18 px-5 pb-2'>
          <h2 className='text-2xl font-bold'>Build a project website</h2>
          <p className='text-sm mt-4'>
            Task description goes here. This is a brief overview of the task. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className='relative flex-shrink-0 rounded-md h-72 bg-[#FE9A00] w-72'>
        <div className='mt-4 absolute  w-full flex justify-between px-5 py-3'>
          <h3 className='bg-red-500 px-3 py-1 text-sm rounded'>High</h3>
          <h4 className='text-sm'>13 Jul 2025</h4>
        </div>
        <div className='pt-18 px-5 pb-2'>
          <h2 className='text-2xl font-bold'>Build a project website</h2>
          <p className='text-sm mt-4'>
            Task description goes here. This is a brief overview of the task. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default TaskList;
