import React from "react";
import { Paper } from "@material-ui/core";
import { arrayMin, arrayMax } from "../utils/utils.js";
import Pane from "./Pane.js";

function prepareRect(rect) {
  return {
    index: rect.index,
    x: rect.x,
    y: rect.y,
    w: rect.rotated ? rect.width : rect.height,
    h: rect.rotated ? rect.height : rect.width
  };
}
function SourcePane(props) {
  let rects = props.data.rects.map(rect => prepareRect(rect));
  let min_x = arrayMin(rects, it => it.x);
  let min_y = arrayMin(rects, it => it.y);
  let max_x = arrayMax(rects, it => it.x + it.h);
  let max_y = arrayMax(rects, it => it.y + it.w);
  rects.forEach(rect => {
    rect.x -= min_x;
    rect.y -= min_y;
  });
  return (
    <Paper style={{ padding: "17px" }}>
      <div>
        <h2 style={{ paddingLeft: "17px" }}>Input</h2>
        <Pane width={max_x - min_x} height={max_y - min_y} rects={rects} />
      </div>
    </Paper>
  );
}

export default SourcePane;
