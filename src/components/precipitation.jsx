import React from 'react';
import { FiCloudDrizzle } from 'react-icons/fi';

const Precipitation = ({ value }) => {
    return (
        <div className='bg-white rounded-[2.5rem] p-6 w-72'>
            <div className="flex justify-between">
                <span className='font-semibold'>Precipitation</span>
                <figure className='bg-blue-dark rounded-xl h-8 aspect-square text-white flex items-center justify-center'>
                    <FiCloudDrizzle className='text-lg inline' />
                </figure>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex gap-2 items-end py-2'>
                    <span className='text-2xl font-extrabold'>{value / 10} cm</span>
                </div>
                <div className='flex justify-between gap-0 text-gray-dark font-light text-xs w-full'>
                    <div className="flex flex-col w-[1/10%]">
                        <span>0<span className='text-transparent'>0</span></span>
                        <progress value={value} max={10} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-[1/10%]">
                        10
                        <progress value={value - 10} max={10} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-[1/10%]">
                        20
                        <progress value={value - 20} max={10} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-[1/10%]">
                        30
                        <progress value={value - 30} max={10} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-[1/10%]">
                        40
                        <progress value={value - 40} max={10} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-[1/10%]">
                        50
                        <progress value={value - 50} max={10} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-[1/10%]">
                        60
                        <progress value={value - 60} max={10} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-[1/10%]">
                        70
                        <progress value={value - 70} max={10} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-[1/10%]">
                        80
                        <progress value={value - 80} max={10} className='rounded-full w-full' />
                    </div>
                    <div className="flex flex-col w-[1/10%]">
                        90
                        <progress value={value - 90} max={10} className='rounded-full w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Precipitation