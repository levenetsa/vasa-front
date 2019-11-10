import React from "react";
import "./App.css";
import Chart from "./components/Chart.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { updateState } from "./utils/utils.js";
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      files: []
    };
    this.componentDidUpdate();

    this.onSelectedFileChange = this.onSelectedFileChange.bind(this);
    this.updateState = updateState.bind(this);
  }

  componentDidUpdate() {
    if (this.state.files.length === 0) {
      fetch("http://localhost:4567/").then(response =>
        response.json().then(data =>
          this.updateState({
            file: data[0],
            files: data
          })
        )
      );
    }
  }

  onSelectedFileChange(file) {
    this.updateState({
      file: file
    });
  }

  render() {
    return (
      <Grid container direction="row" style={{ flexGrow: 1 }} spacing={1}>
        <Grid item xs={2}> 
          <Paper style={{padding: "20px"}}>
            <h2 style={{ paddingLeft: "17px" }}>Solutions</h2>
            <h5 style={{ paddingTop: "17px", paddingLeft: "17px" }}>File Name</h5>
            <List>
              {this.state.files.map(file => (
                <ListItem
                  button
                  selected={this.state.file === file}
                  onClick={event => this.onSelectedFileChange(file)}
                >
                  <ListItemText primary={file} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Chart file={this.state.file} />
        </Grid>
      </Grid>
    );
  }
}

export default App;
