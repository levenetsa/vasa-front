import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { updateState } from "../utils/utils.js";
import { Paper } from "@material-ui/core";

class PackerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solutions: props.solutions,
      selected: props.solutions[0]
    };

    this.onSelectedPackerChange = this.onSelectedPackerChange.bind(this);
    this.updateState = updateState.bind(this);
  }

  onSelectedPackerChange(solution) {
    this.updateState({
      selected: solution
    });
    this.props.callback(solution)
  }

  componentDidUpdate(prevProps) {
    if (this.props.solutions !== prevProps.solutions) {
      this.updateState({
        solutions: this.props.solutions,
        selected: this.props.solutions[0],
        efficency: 0
      });
    }
  }

  render() {
    return (
      <Paper style={{ padding: "20px" }}>
        <h2 style={{ paddingLeft: "17px" }}>Packer</h2>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell size="small">Packer Name</TableCell>
              <TableCell align="right" size="small">Price</TableCell>
              <TableCell align="right" size="small">Efficency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.solutions.map(row => (
              <TableRow
                key={row.packerName}
                selected={this.state.selected.packerName === row.packerName}
                onClick={event => this.onSelectedPackerChange(row)}
              >
                <TableCell component="th" scope="row">
                  {row.packerName}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.efficency.toFixed(3)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default PackerTable;
