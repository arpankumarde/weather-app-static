import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

const Welcome = ({ User, Avatar }) => {
    return (
        <section className='flex justify-between items-center'>
            <div className="flex flex-col">
                <span className="font-bold">Welcome back {User.name}!</span>
                <span>Check out today's weather information</span>
            </div>
            <div className='flex items-center gap-4'>
                <button className='hover:bg-blue-dark hover:bg-opacity-20 transition-all duration-300 ease-in-out rounded-full p-2 text-xl'><FiMoreHorizontal /></button>
                <button><img src={Avatar} alt="avatar" className='h-10 rounded-xl' /></button>
            </div>
        </section>
    )
}

export default Welcome