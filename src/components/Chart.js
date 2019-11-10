import React from "react";
import Grid from "@material-ui/core/Grid";
import Solution from "./Solution.js";
import PackerTable from "./PackerTable.js";
import { updateState } from "../utils/utils.js";
import { Paper } from "@material-ui/core";

function loadFile(context, name) {
  fetch(`http://localhost:4567/${name}`).then(result =>
    result
      .json()
      .then(data => {
        data.solutions = data.solutions.sort(
          (a, b) => a.efficency * 10 - b.efficency * 10
        );
        context.updateState({
          elements: data,
          solutions: data.solutions,
          activeSolution: data.solutions[0]
        });
      })
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
      activeSolution: null
    };

    this.updateState = updateState.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.file === null || this.props.file !== prevProps.file) {
      this.updateState({ file: this.props.file });
      loadFile(this, this.props.file);
    }
  }

  selectedPackerChanged(solution) {
    this.updateState({
      activeSolution: solution
    });
  }

  render() {
    if (this.state.elements == null) {
      return <div>No data</div>;
    }
    return (
      <Grid container direction="row" spacing={1}>
        <Grid item xs={6}>
          <PackerTable
            solutions={this.state.elements.solutions}
            callback={solution => this.selectedPackerChanged(solution)}
          />
        </Grid>
        <Grid item xs={6}>
          <Solution
            stripWidth={this.state.elements.ctInput.stripWidth}
            data={this.state.activeSolution}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Chart;
