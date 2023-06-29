import React from 'react';
import { Welcome, Graph, Humidity, Wind, Precipitation, UVIndex, FeelsLike, ChanceOfRain } from './';
import { Avatar } from '../static/avatar';

const Main = ({ tempf, setTempf, user, weather }) => {
    return (
        <main className='bg-blue-light p-10 rounded-l-[2.5rem] h-screen'>
            <Welcome User={user} Avatar={Avatar} />
            <Graph />
            <section>
                <span className='font-bold'>More details of today's weather</span>
                <div className='flex justify-center flex-wrap gap-10 my-6'>
                    <Humidity value={weather.humidity} />
                    <Wind value={weather.wind} />
                    <Precipitation value={weather.precipitation} />
                    <UVIndex value={weather.uv} />
                    <FeelsLike feels={weather.feels} tempf={tempf} />
                    <ChanceOfRain value={weather.chancesofrain} />
                </div>
            </section>
        </main>
    )
}

export default Main