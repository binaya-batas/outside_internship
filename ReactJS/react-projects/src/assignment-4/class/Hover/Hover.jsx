import { AiTwotonePlaySquare, AiTwotoneDollarCircle } from 'react-icons/ai';
import { TbRectangle } from 'react-icons/tb';
import { BsFillTriangleFill } from 'react-icons/bs';

import { useState } from 'react';

import './hover.scss';
import useMouseCordinate from './useMouseCordinate';

function Hover() {
    const [mouseState, setMouseState] = useState({
        triangle: false,
        circle: false,
        rectangle: false,
        square: false
    })

    const { mouseCordinate, handleMouseMove } = useMouseCordinate();

    console.log(mouseCordinate);

    const handleMouseEnter = () => {
        setMouseState({...mouseState, triangle: true });
    }

    const handleLeave = () => {
        setMouseState(false)
    }
    
    return (
        <div className="hover" onMouseMove={handleMouseMove}>
            <div className="hover__triangle" onMouseEnter={handleMouseEnter} onMouseLeave={handleLeave}>
                {mouseState.triangle &&
                    <BsFillTriangleFill />
                }
            </div>
            <div className="hover__circle" onMouseEnter={handleMouseEnter} onMouseLeave={handleLeave}>
                {mouseState.circle &&
                    <AiTwotoneDollarCircle />
                }
            </div>
            <div className="hover__rectangle" onMouseEnter={handleMouseEnter} onMouseLeave={handleLeave}>
                {mouseState.rectangle &&
                    <TbRectangle />
                }
            </div>
            <div className="hover__square" onMouseEnter={handleMouseEnter} onMouseLeave={handleLeave}>
                {mouseState.square &&
                    <AiTwotonePlaySquare />
                }
            </div>
        </div>
    )
}

export default Hover;