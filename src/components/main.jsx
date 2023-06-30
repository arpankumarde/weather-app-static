import React from 'react';
import { Welcome, Graph, Humidity, Wind, Precipitation, UVIndex, FeelsLike, ChanceOfRain } from './';
import { Avatar } from '../static/avatar';

const Main = ({ tempf, user, weather }) => {
    return (
        <main className='bg-blue-light p-8 rounded-l-[2.5rem] h-screen overflow-scroll'>
            <Welcome User={user} Avatar={Avatar} />
            <Graph data={weather.precipitationData} tempf={tempf} />
            <section>
                <span className='font-bold'>More details of today's weather</span>
                <div className='flex justify-center flex-wrap gap-8 mt-6'>
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