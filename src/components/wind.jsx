import React from 'react';
import { FiWind } from 'react-icons/fi';

const Wind = ({ value }) => {
    return (
        <div className='bg-white rounded-[2.5rem] p-6 w-72'>
            <div className="flex justify-between">
                <span className='font-semibold'>Wind</span>
                <figure className='bg-blue-dark rounded-xl h-8 aspect-square text-white flex items-center justify-center'>
                    <FiWind className='text-lg inline' />
                </figure>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex gap-2 items-end py-2'>
                    <span className='text-2xl font-extrabold'>{value} km/h</span>
                </div>
                <div className='flex justify-between gap-4 text-gray-dark w-full'>
                    <div className="flex flex-col w-1/3">
                        good
                        <progress value={value} max={33.33} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-1/3">
                        normal
                        <progress value={value - 33.33} max={66.66 - 33.33} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-1/3">
                        bad
                        <progress value={value - 66.66} max={100 - 66.66} className='rounded-full w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wind