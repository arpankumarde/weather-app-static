import React from 'react';
import { IoNavigateOutline } from 'react-icons/io5';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { FiSunset, FiSunrise, FiChevronLeft, FiChevronRight, FiSun } from 'react-icons/fi';

const Sidebar = ({ tempf, setTempf, weather, user }) => {
    return (
        <aside className='flex flex-col w-[23%] bg-blue-dark text-white h-screen'>
            <section className='flex justify-between p-6'>
                <button className='text-2xl'>
                    <BsFillPlusSquareFill className='rounded-lg' />
                </button>
                <div />
                <div className='flex gap-2 text-sm items-center'>
                    <button className={`${!tempf && 'font-bold'} hover:cursor-pointer`} onClick={() => setTempf(false)}><sup>o</sup>C</button>
                    <input type="checkbox" role="switch"
                        className="mr-1 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:after:absolute checked:after:z-[2] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100"
                        onClick={() => setTempf((prev) => !prev)}
                        checked={tempf} />
                    <button className={`${tempf && 'font-bold'} hover:cursor-pointer`} onClick={() => setTempf(true)}><sup>o</sup>F</button>
                </div>
            </section>
            <section className='flex flex-col p-6'>
                <div className='flex justify-between items-end'>
                    <span className='inline-flex items-center gap-2 text-lg'><IoNavigateOutline />{user.location}</span>
                    <span className='inline-flex items-center gap-2'><FiSunrise />{weather.sunrise}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='font-light text-sm text-blue-light'>Today 28 Sept</span>
                    <span className='inline-flex items-center gap-2'><FiSunset />{weather.sunset}</span>
                </div>
            </section>
            <section className='p-6 flex justify-between items-center font-semibold'>
                <button className='text-zinc-300 text-2xl h-8 aspect-square rounded-full'><FiChevronLeft className='mx-auto' /></button>
                <div className='flex items-start text-8xl'>{tempf ? weather.temp.fahrenheit : weather.temp.celsius}<sup className='text-5xl mt-5'>o</sup></div>
                <button className='text-zinc-300 text-2xl h-8 aspect-square rounded-full'><FiChevronRight className='mx-auto' /></button>
            </section>
            <section className='flex justify-center items-center gap-2 text-xl'>
                <FiSun />
                <span className=''>{weather.temp.comment}</span>
            </section>
            <section className='pt-6'>
                <img src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/SunnyDayV3.svg" alt="sunnyDay" className='mx-auto h-32' draggable='false' />
            </section>
        </aside>
    )
}

export default Sidebar