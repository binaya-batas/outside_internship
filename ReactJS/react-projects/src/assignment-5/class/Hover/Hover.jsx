import { AiTwotonePlaySquare, AiTwotoneDollarCircle } from 'react-icons/ai';
import { TbRectangle } from 'react-icons/tb';
import { BsFillTriangleFill } from 'react-icons/bs';

import { useState } from 'react';

import './hover.scss';
import useMouseCordinate from './useMouseCordinate';

function Hover() {
    return (
        <div className="hover">
            <HoverSection icon={<AiTwotoneDollarCircle />} />
            <HoverSection icon={<TbRectangle />} />
            <HoverSection icon={<BsFillTriangleFill />} />
            <HoverSection icon={<AiTwotonePlaySquare />} />
        </div>
    )
}

export default Hover;

const HoverSection = ({icon}) => {
    const { mouseCordinate, handleMouseMove } = useMouseCordinate();

    return (
        <div className="hover__triangle" onMouseMove={handleMouseMove}>
            <span className="" 
                style={{
                position: 'absolute', 
                top: mouseCordinate.y, 
                left: mouseCordinate.x,
                height: '20px',
                width: '60px'}}>
                    {icon}
            </span>
        </div>
    )
}