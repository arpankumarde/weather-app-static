import React from 'react';
import { IoThermometerOutline } from 'react-icons/io5'

const FeelsLike = ({ feels, tempf }) => {
    return (
        <div className='bg-white rounded-[2.5rem] p-6 w-72'>
            <div className="flex justify-between">
                <span className='font-semibold'>Feels Like</span>
                <figure className='bg-blue-dark rounded-xl h-8 aspect-square text-white flex items-center justify-center'>
                    <IoThermometerOutline className='text-lg inline' />
                </figure>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex items-start py-2 font-extrabold'>
                    <span className='text-2xl font-extrabold'>{tempf ? feels.fahrenheit : feels.celsius}</span>
                    <span className='text-xs'>o</span>
                </div>
                <div className='flex flex-col justify-between gap-1 text-gray-dark w-full'>
                    <div className="flex justify-between  font-light text-xs">
                        <span className='w-1/3 text-left'>{tempf ? 32 : 0}<sup>o</sup></span>
                        <span className='w-1/3 text-center'>{tempf ? 77 : 25}<sup>o</sup></span>
                        <span className='w-1/3 text-right'>{tempf ? 122 : 50}<sup>o</sup></span>
                    </div>
                    <progress value={tempf ? feels.fahrenheit : feels.celsius} max={tempf ? 122 : 50} className='rounded-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default FeelsLike