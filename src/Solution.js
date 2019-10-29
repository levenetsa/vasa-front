import React from 'react';
import Rect from './Rect.js';

const mult = 10;

function Solution(props) {
    let rects = props.data.rects;
    rects.forEach(it => {
        it.x *= mult;
        it.y *= mult;
        it.px *= mult;
        it.py *= mult;
        it.width *= mult;
        it.height *= mult;
    });
    let min_x = Math.min.apply(Math, rects.map(it => it.x));
    let min_y = Math.min.apply(Math, rects.map(it => it.y));
    let max_x = Math.max.apply(Math, rects.map(it => it.x + it.width + 1));
    let max_y = Math.max.apply(Math, rects.map(it => it.y + it.height + 1));
    return (
        <div>
            <div>
                <svg width={(max_x - min_x)} height={(max_y - min_y)} style={{border: "2px solid black"}}>
                    {props.data.rects.map(rect =>
                        <Rect
                            index={rect.index}
                            key={rect.index}
                            x={rect.x - min_x}
                            y={rect.y - min_y}
                            w={rect.rotated ? rect.height : rect.width}
                            h={rect.rotated ? rect.width : rect.height}/>
                    )}
                </svg>
            </div>
            <div>
                <svg width={props.stripWidth * mult}
                     height={props.data.packHeight * mult}
                     style={{border: "2px solid black"}}>
                    {props.data.rects.map(rect =>
                        <Rect index={rect.index}
                              key={rect.index}
                              x={rect.px}
                              y={rect.py}
                              w={rect.width}
                              h={rect.height}/>)}
                </svg>
            </div>
        </div>
    );
}

export default Solution;
