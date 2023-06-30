import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { FiWind } from 'react-icons/fi';
import { CgArrowLongUpC } from 'react-icons/cg';

const Wind = ({ value }) => {
    return (
        <div className='bg-white rounded-[2.5rem] p-6 w-72'>
            <div className="flex justify-between">
                <span className='font-semibold'>Wind</span>
                <figure className='bg-blue-dark rounded-xl h-8 aspect-square text-white flex items-center justify-center'>
                    <FiWind className='text-lg inline' />
                </figure>
            </div>
            <div className='flex flex-col items-center h-20 px-8'>
                <CircularProgressbarWithChildren
                    value={value * 100 / 40}
                    circleRatio={0.5}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 4,
                        strokeLinecap: "",
                        trailColor: "#DCDCDC",
                        pathColor: "#5C9CE5",
                    })}
                    strokeWidth={5}
                    className='-mt-2'
                >
                    <CgArrowLongUpC className={`origin-bottom text-blue-dark -rotate-45 text-5xl -mt-6 -mb-3`} />
                    <div className='gap-2 items-end py-2'>
                        <span className='text-2xl font-extrabold'>{value} km/h</span>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    )
}

export default Wind