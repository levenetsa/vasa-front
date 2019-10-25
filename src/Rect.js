import React from 'react';

const mult = 20

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Rect (props){
 
    return (
    	<rect 
		    x={props.x * mult} 
			y={props.y * mult}
			width={props.w * mult} 
			height={props.h * mult}
			fill={getRandomColor()} />
	);
  }

export default Rect;

