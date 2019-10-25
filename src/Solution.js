import React from 'react';
import Rect from './Rect.js';

const mult = 20
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Solution (props){
 
    return (
    	<li key="props.data.packerName" style={{ display:"flex"}}>
	    	<svg width="500" height="500"  style={{ border: "2px solid black"}}>
	    		{props.data.rects.map(rect => <Rect x={rect.px} y={rect.py} w={rect.width} h={rect.height}/>)}
    		</svg>
    		<svg width="500" height="500"  style={{ border: "2px solid black"}}>
	    		{props.data.rects.map(rect => <Rect x={rect.x} y={rect.y} w={rect.height} h={rect.width}/>)}
    		</svg>
    	</li>
	);
  }

export default Solution;
