import React from 'react';
import { PiUmbrellaSimpleBold } from 'react-icons/pi';

const ChanceOfRain = ({ value }) => {
    return (
        <div className='bg-white rounded-[2.5rem] p-6 w-72'>
            <div className="flex justify-between">
                <span className='font-semibold'>Chance of rain</span>
                <figure className='bg-blue-dark rounded-xl h-8 aspect-square text-white flex items-center justify-center'>
                    <PiUmbrellaSimpleBold className='text-lg inline' />
                </figure>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex gap-2 items-end py-2'>
                    <span className='text-2xl font-extrabold'>{value}%</span>
                </div>
                <div className='flex flex-col justify-between gap-1 text-gray-dark w-full'>
                    <div className="flex justify-between font-light text-xs">
                        <span className='w-1/5 text-left'>0%</span>
                        <span className='w-1/5 text-left'>25%</span>
                        <span className='w-1/5 text-center'>50%</span>
                        <span className='w-1/5 text-right'>75%</span>
                        <span className='w-1/5 text-right'>100%</span>
                    </div>
                    <progress value={value} max={100} className='rounded-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default ChanceOfRain