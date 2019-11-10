import React from "react";
import Grid from "@material-ui/core/Grid";
import Solution from "./Solution.js";
import PackerTable from "./PackerTable.js";
import { updateState } from "../utils/utils.js";

function loadFile(context, name) {
  fetch(`http://localhost:4567/${name}`).then(result =>
    result
      .json()
      .then(data =>
        context.updateState({
          elements: data,
          solutions: data.solutions,
          index: 0,
          packer: data.solutions[0].packerName
        })
      )
      .catch(error => console.log(error))
  );
}

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      content: "",
      elements: null,
      solutions: [],
      index: 0,
      packer: ""
    };

    this.updateState = updateState.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.file === null || this.props.file !== prevProps.file) {
      this.updateState({ file: this.props.file });
      loadFile(this, this.props.file);
    }
  }

  render() {
    console.log(this.state.solutions);
    if (this.state.elements == null) {
      return <div>No data</div>;
    }
    return (
      <Grid container item direction="row" xs={20}>
        <Grid item xs={10}>
          <h2 style={{paddingLeft:"17px"}}>Packer</h2>
          <PackerTable solutions={this.state.elements.solutions} />
        </Grid>
        <Grid item xs={5}>
          <Solution
            stripWidth={this.state.elements.ctInput.stripWidth}
            data={this.state.solutions[this.state.index]}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Chart;
