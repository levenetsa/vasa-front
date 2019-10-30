import React from "react";
import "./App.css";
import Chart from "./components/Chart.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      files: [],
      isFile: true
    };
    this.componentDidUpdate();

    this.handleChange = this.handleChange.bind(this);
    this.onSelectedFileChange = this.onSelectedFileChange.bind(this);
    this.onSelectedModeChange = this.onSelectedModeChange.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isFile && this.state.files.length === 0) {
      fetch("http://localhost:4567/").then(response =>
        response.json().then(data =>
          this.setState({
            file: data[0],
            files: data,
            isFile: this.state.isFile
          })
        )
      );
    }
  }

  handleChange(event) {
    this.setState({
      file: event.target.files[0],
      files: this.state.files,
      isFile: this.state.isFile
    });
  }

  onSelectedFileChange(file) {
    this.setState({
      file: file,
      files: this.state.files,
      isFile: this.state.isFile
    });
  }

  onSelectedModeChange(event) {
    this.setState({
      file: this.state.file,
      files: this.state.files,
      isFile: !this.state.isFile
    });
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        xs={12}
      >
        <List
          component="nav"
          aria-label="main mailbox folders"
          xs={2}
        >
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
        <Chart file={this.state.file} xs={10}/>
      </Grid>
    );
  }
}

export default App;
