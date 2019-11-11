import React from "react";
import Rect from "./Rect.js";

const backgrpundSvg =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' " +
  "viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23777777' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon " +
  "fill='%23777777' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E\")";

const mult = 10;

function Pane(props) {
  return (
    <div
      style={{
        width: `${props.width * mult}px`,
        height: `${props.height * mult}px`,
        backgroundColor: "#AAAAAA",
        backgroundImage: backgrpundSvg
      }}
    >
      <svg
        width={props.width * mult}
        height={props.height * mult}
        style={{ border: "2px solid black", transform: props.transform }}
      >
        {props.rects.map(rect => (
          <Rect
            key={rect.index}
            index={rect.index}
            x={rect.x * mult}
            y={rect.y * mult}
            w={rect.h * mult}
            h={rect.w * mult}
          />
        ))}
      </svg>
    </div>
  );
}

export default Pane;
