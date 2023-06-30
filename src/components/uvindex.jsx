import React from 'react';
import { FiSun } from 'react-icons/fi';

const UVIndex = ({ value }) => {
    return (
        <div className='bg-white rounded-[2.5rem] p-6 w-72'>
            <div className="flex justify-between">
                <span className='font-semibold'>UV Index</span>
                <figure className='bg-blue-dark rounded-xl h-8 aspect-square text-white flex items-center justify-center'>
                    <FiSun className='text-lg inline' />
                </figure>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex gap-2 items-end py-2'>
                    <span className='text-2xl font-extrabold'>{value}</span>
                    <span>{(value <= 2) ? 'low' : (value <= 5) ? 'medium' : (value <= 7) ? 'high' : (value <= 10) ? 'extreme' : 'too extreme'}</span>
                </div>
                <div className='flex justify-between gap-4 text-gray-dark w-full font-light text-xs'>
                    <div className="flex flex-col w-1/5">
                        0-2
                        <progress value={value} max={2} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-1/5">
                        3-5
                        <progress value={value - 2} max={5 - 2} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-1/5">
                        6-7
                        <progress value={value - 5} max={7 - 5} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-1/5">
                        8-10
                        <progress value={value - 7} max={10 - 7} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-1/5">
                        11+
                        <progress value={value - 10} max={12 - 10} className='rounded-full w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UVIndex