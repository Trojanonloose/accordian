import React from "react";
import Accordian from "./Accordian";
import data from './data'

function App() {
  return (
    <div className="bg-violet-500 w-full min-h-screen flex justify-center items-center ">
      <div className="w-3/4 h-auto my-4 mx-auto p-4 bg-white rounded-lg">
        {data.map((item) => {
          const { id, title, developer, desc } = item;
          return <Accordian key={id} title={title} dev={developer} desc={desc} />
        })}
      </div>
    </div>
  );
}

export default App;
