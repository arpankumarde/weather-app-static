import React, { useState } from "react";
import { Sidebar, Main } from './components';
import { user, weather } from "./data";

function App() {
  const [tempf, setTempf] = useState(false);

  return (
    <div className="flex w-full h-full">
      <Sidebar tempf={tempf} setTempf={setTempf} weather={weather} user={user} />
      <section className="w-[77%] bg-blue-dark h-screen">
        <Main tempf={tempf} setTempf={setTempf} weather={weather} user={user} />
      </section>
    </div>
  )
}

export default App