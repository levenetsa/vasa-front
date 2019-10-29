import React from 'react';

function getRandomColor(seed) {
    let hex = Math.floor((Math.abs(Math.sin(seed + 777) * 16777215)) % 16777215);
    return '#' + hex.toString(16);
}

function Rect(props) {

    return <rect
        x={props.x}
        y={props.y}
        width={props.w}
        height={props.h}
        fill={getRandomColor(props.index)}/>
}

export default Rect;

