import React from "react";
import { Paper } from "@material-ui/core";
import Pane from "./Pane.js";

function SolutionPane(props) {
  let rects = props.data.rects.map(rect => ({
    index: rect.index,
    x: rect.px,
    y: rect.py,
    w: rect.height,
    h: rect.width
  }));
  return (
    <Paper style={{ padding: "17px" }}>
      <div>
        <h2 style={{ paddingLeft: "17px" }}>Solution</h2>
        <Pane
          transform="scale(1,-1)"
          width={props.stripWidth}
          height={props.data.packHeight}
          rects={rects}
        />
      </div>
    </Paper>
  );
}

export default SolutionPane;
