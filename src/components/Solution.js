import React from "react";
import Rect from "./Rect.js";
import { Paper } from "@material-ui/core";
import { min, max } from "../utils/utils.js"

const mult = 10;

function Solution(props) {
  console.log("re-render");
  let rects = props.data.rects.map(it => {
    return {
      index: it.index,
      rotated: it.rotated,
      x: it.x * mult,
      y: it.y * mult,
      px: it.px * mult,
      py: it.py * mult,
      width: it.width * mult,
      height: it.height * mult
    };
  });
  let min_x = min(rects, (it) => it.rotated?it.x:it.y);
  let min_y = min(rects, (it) => it.rotated?it.x:it.y);
  let max_x = max(rects, (it) => it.rotated?it.x:it.y + it.rotated?it.width:it.height + 1);
  let max_y = max(rects, (it) =>  it.rotated?it.y:it.x + it.rotated?it.height:it.width + 1);
  return (
    <Paper style={{ padding: "17px" }}>
      <div>
        <h2 style={{ paddingLeft: "17px" }}>Input Split</h2>
        <div
          style={{
            width: `${max_x - min_x + 4}px`,
            height: `${max_y - min_y + 3}px`,
            backgroundColor: "#AAAAAA",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23777777' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%23777777' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E\")"
          }}
        >
          <svg
            width={max_x - min_x}
            height={max_y - min_y}
            style={{ border: "2px solid black" }}
          >
            {rects.map(rect => (
              <Rect
                index={rect.index}
                key={rect.index}
                x={rect.x - min_x}
                y={rect.y - min_y}
                w={rect.rotated ? rect.height : rect.width}
                h={rect.rotated ? rect.width : rect.height}
              />
            ))}
          </svg>
        </div>
      </div>
      <div>
        <h2 style={{ paddingLeft: "17px" }}>Pack</h2>
        <div
          style={{
            width: `${props.stripWidth * mult}px`,
            height: `${props.data.packHeight * mult}px`,
            backgroundColor: "#AAAAAA",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23777777' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%23777777' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E\")"
          }}
        >
          <svg
            transform="rotate(180)"
            width={props.stripWidth * mult}
            height={props.data.packHeight * mult}
            style={{ border: "2px solid black" }}
          >
            {rects.map(rect => (
              <Rect
                index={rect.index}
                key={rect.index}
                x={rect.px}
                y={rect.py}
                w={rect.width}
                h={rect.height}
              />
            ))}
          </svg>
        </div>
      </div>
    </Paper>
  );
}

export default Solution;
