import React from 'react'

const Header = () => {
    return (

        <div className='flex justify-between items-center color-white p-9 '>
            <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>Rohan 👋</span></h1>
            <button className='bg-red-600 px-4 py-2 rounded-md font-semibold'> Log Out</button>
        </div>

    )
}

export default Header