import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Solution from "./Solution.js";

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
  }

  updateState(newValues) {
    let originalStateCopy = Object.assign({}, this.state);
    let newState = Object.assign(originalStateCopy, newValues);
    this.setState(newState);
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
      <Grid container direction="row" alignItems="flex-start" xs={12}>
        <List component="nav" aria-label="main mailbox folders" xs={2}>
          {this.state.elements.solutions.map((solution, index) => (
            <ListItem
              button
              selected={this.state.packer === solution.packerName}
              onClick={event => this.onSelectedPackerChange(solution.packerName, index)}
            >
              <ListItemText primary={solution.packerName} />
            </ListItem>
          ))}
        </List>

        <Solution
          stripWidth={this.state.elements.ctInput.stripWidth}
          data={this.state.solutions[this.state.index]}
        />
      </Grid>
    );
  }
}

export default Chart;
