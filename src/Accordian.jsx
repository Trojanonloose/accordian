import React, { useState } from 'react'
import { FaCaretRight } from 'react-icons/fa'

const Accordian = (props) => {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return (
        <>
            <div className="flex flex-col items-center my-3 px-4">
                <div className="flex items-center justify-between w-full border-b-2 border-rose-500">
                    <h2 className="text-2xl lg:text-4xl font-bold text-black/90">
                        {props.title}
                    </h2>
                    <div
                        className={`text-2xl lg:text-4xl cursor-pointer opacity-90 transition duration-200 ${expanded ? 'rotate-90' : 'rotate-0'}`}
                        onClick={handleClick}
                    >
                        <FaCaretRight />
                    </div>
                </div>
                {expanded &&
                    <div className="p-3 text-xl lg:text-2xl">
                        <h2 className='mb-2'>Developed By: {props.dev}</h2>
                        <p>{props.desc}</p>
                    </div>
                }
            </div>
        </>
    )
}

export default Accordian