import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Solution from "./Solution.js";
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

    this.onSelectedPackerChange = this.onSelectedPackerChange.bind(this);
    this.updateState = updateState.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.file === null || this.props.file !== prevProps.file) {
      this.updateState({ file: this.props.file });
      loadFile(this, this.props.file);
    }
  }

  onSelectedPackerChange(name, index) {
    this.updateState({
      index: index,
      packer: name
    });
  }

  render() {
    console.log(this.state.solutions);
    if (this.state.elements == null) {
      return <div>No data</div>;
    }
    return (
      <Grid container item direction="row" xs={12}>
        <Grid item xs={4}>
          <h2 style={{paddingLeft:"17px"}}>Packer</h2>
          <List xs={2}>
            {this.state.elements.solutions.map((solution, index) => (
              <ListItem
                button
                selected={this.state.packer === solution.packerName}
                onClick={event =>
                  this.onSelectedPackerChange(solution.packerName, index)
                }
              >
                <ListItemText primary={`${solution.packerName} ${solution.efficency * 1000 / 1000 * 10} ${solution.elapsedTimeInMilliseconds}`} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={8}>
          <Solution
            stripWidth={this.state.elements.ctInput.stripWidth}
            data={this.state.solutions[this.state.index]}
            xs={10}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Chart;
