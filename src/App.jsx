import React from "react";
import { Sidebar, Main } from './components';

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  )
}

export default App