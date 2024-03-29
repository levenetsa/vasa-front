import React from "react";
import Grid from "@material-ui/core/Grid";
import SolutionPane from "./SolutionPane.js";
import SourcePane from "./SourcePane.js";
import PackerTable from "./PackerTable.js";
import { updateState } from "../utils/utils.js";

function loadFile(context, name) {
  var json = require(`../data/${name}`);
  context.updateState({
    elements: json,
    solutions: json.solutions,
    activeSolution: json.solutions[0]
  });
}

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: props.file,
      content: "",
      elements: null,
      solutions: [],
      activeSolution: null
    };

    this.updateState = updateState.bind(this);
  }

  componentDidMount() {
    loadFile(this, this.state.file);
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
          <SourcePane data={this.state.activeSolution} />
        </Grid>
        <Grid item xs={6}>
          <SolutionPane
            stripWidth={this.state.elements.ctInput.stripWidth}
            data={this.state.activeSolution}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Chart;
