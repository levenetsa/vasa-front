import React from 'react';
import Rect from './Rect.js';

const mult = 10;

function Solution(props) {
    console.log("re-render")
    let rects = props.data.rects.map(it => { return {
        index: it.index,
        rotated: it.rotated,
        x: it.x * mult,
        y: it.y * mult,
        px: it.px * mult,
        py: it.py * mult,
        width: it.width * mult,
        height: it.height * mult
    }});
    let min_x = Math.min.apply(Math, rects.map(it => it.x));
    let min_y = Math.min.apply(Math, rects.map(it => it.y));
    let max_x = Math.max.apply(Math, rects.map(it => it.x + it.width + 1));
    let max_y = Math.max.apply(Math, rects.map(it => it.y + it.height + 1));
    return (
        <div>
            <div>
                <svg width={(max_x - min_x)} height={(max_y - min_y)} style={{border: "2px solid black"}}>
                    {rects.map(rect =>
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
                    {rects.map(rect =>
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
