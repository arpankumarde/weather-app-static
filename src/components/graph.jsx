import React from 'react';
import { FiChevronDown, FiChevronRight, FiCloud, FiSun } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { RxDividerVertical } from 'react-icons/rx';


const Graph = ({ data, tempf }) => {
    return (
        <section className='flex flex-col bg-white rounded-3xl p-8 my-8'>
            <div className="flex justify-between font-bold pb-8">
                <div>Upcoming hours</div>
                <div className="flex justify-between gap-6">
                    <button className='inline-flex items-center text-base px-2 rounded-full py-0.5 bg-[#F1F1F1] disabled:text-zinc-400 disabled:font-normal' disabled>Rain precipitaion <FiChevronDown className='font-bold' /> </button>
                    <button className='inline-flex items-center text-base px-2 rounded-full py-0.5 bg-[#F1F1F1]'>Next days <FiChevronRight /></button>
                </div>
            </div>
            <div className='flex justify-between pl-2'>
                {data.map((inst, key) =>
                    <div key={key} className='flex flex-col gap-1'>
                        <span className={`text-xs mx-auto ${(inst.time == 'Now') ? 'font-semibold' : null}`}>{inst.time}</span>
                        <span className='inline mx-auto'>{(inst.wtype == 'sunny') ? <FiSun /> : <FiCloud />}</span>
                        <span className='inline mx-auto font-bold'>{tempf ? (inst.temp) * 1.8 + 32 : inst.temp}<sup>o</sup></span>
                    </div>
                )}
            </div>
            <div className='px-4'>
                <ResponsiveContainer width="100%" height={100} className="chart">
                    <AreaChart
                        width={500}
                        height={200}
                        data={data}
                        margin={{
                            top: 0,
                            right: 1,
                            left: 1,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid vertical={true} horizontal={false} stroke='black' />
                        {/* <XAxis stroke='black' /> */}
                        {/* <YAxis hide /> */}
                        <Area type={'linear'} dataKey="ppt" stroke="#5C9CE5" strokeWidth={0} fill="#5C9CE5" style={{ fillOpacity: 0.8 }} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className='flex justify-between'>
                {data.map((inst, key) =>
                    <div className='flex flex-col items-center -mt-1'>
                        <span className='-mb-1 select-none'><RxDividerVertical /></span>
                        <span key={key} className={key < 4 ? 'text-left' : 'text-right'}>{inst.ppt}%</span>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Graph