import { useState } from "react";

const useMouseCordinate = () => {
    console.log("hello")
    const [mouseCordinate, setMouseCordinate] = useState({x: null, y: null});

    const handleMouseMove = (event) => {
        setMouseCordinate({
            x: event.clientX,
            y: event.clientY
        })
    }

    return {mouseCordinate, handleMouseMove}
}

export default useMouseCordinate;