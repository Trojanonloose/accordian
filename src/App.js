import React, { useState } from "react";
import data from './data'
import { FaCaretRight } from 'react-icons/fa'

function App() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="bg-violet-500 w-full min-h-screen flex justify-center items-center ">
      <div className="w-3/4 h-auto my-4 mx-auto p-4 bg-white rounded-lg">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center my-3 px-4">
            <div className="flex items-center justify-between w-full border-b-2 border-rose-500">
              <h2 className="text-2xl lg:text-4xl font-bold text-[#c59d5f]">
                {item.title}
              </h2>
              <div
                className={`text-2xl lg:text-4xl cursor-pointer opacity-90 transition duration-500 ${selected === i ? 'rotate-90' : 'rotate-0'}`}
                onClick={() => toggle(i)}
              >
                <FaCaretRight />
              </div>
            </div>
            <div className={`p-3 text-xl lg:text-2xl transition duration-500 ${selected === i ? 'block' : 'hidden'}`}>
              <h2 className='mb-2'>Developed By: {item.developer}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
