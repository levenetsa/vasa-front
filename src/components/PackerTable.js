import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { updateState } from "../utils/utils.js";
import { Paper } from "@material-ui/core";

const sortSpanClass = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  top: 20,
  width: 1
};

const cells = [
  { name: "Packer Name", accesor: solution => solution.packerName },
  { name: "Price", accesor: solution => solution.price },
  { name: "Efficency", accesor: solution => solution.efficency.toFixed(3) },
  { name: "Time", accesor: solution => solution.elapsedTimeInMilliseconds }
];

class PackerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      solutions: props.solutions,
      selected: props.solutions[0].packerName,
      orderBy: "Price",
      order: "desc"
    };

    this.onSelectedPackerChange = this.onSelectedPackerChange.bind(this);
    this.updateState = updateState.bind(this);
  }

  onSelectedPackerChange(solution) {
    this.updateState({
      selected: solution.packerName
    });
    this.props.callback(solution);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.solutions !== prevProps.solutions) {
      this.updateState({
        solutions: this.props.solutions,
        selected: this.props.solutions[0],
        efficency: 0
      });
    }
  }

  updateSort(name) {
    if (this.state.orderBy !== name) {
      this.updateState({
        solutions: this.sortSolutions(name, this.state.order),
        orderBy: name,
        order: this.state.order === "desc" ? "asc" : "desc"
      });
    } else {
      let newOrder = this.state.order === "desc" ? "asc" : "desc";
      this.updateState({
        solutions: this.sortSolutions(name, this.state.order),
        order: newOrder
      });
    }
  }

  sortSolutions(orderBy, order) {
    let current = cells.filter(it => it.name === orderBy)[0].accesor;
    let revert = order === "desc";
    if (orderBy == "Packer Name") {
      let sorted = this.state.solutions.sort((a, b) =>
        a.packerName > b.packerName ^ revert ? 1 : -1
      );
      return sorted;
    }
    let sorted = this.state.solutions.sort(
      (a, b) => (revert ? -1 : 1) * (current(a) - current(b))
    );
    return sorted;
  }

  render() {
    return (
      <Paper style={{ padding: "20px" }}>
        <h2 style={{ paddingLeft: "17px" }}>Packer</h2>
        <div style={{ height: "554px", overflow: "auto" }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {cells.map(cell => (
                  <TableCell
                    key={cell.name}
                    align="left"
                    padding="default"
                    sortDirection={
                      this.state.orderBy === cell.name
                        ? this.state.order
                        : false
                    }
                  >
                    <TableSortLabel
                      active={this.state.orderBy === cell.name}
                      direction={this.state.order}
                      onClick={evt => this.updateSort(cell.name)}
                    >
                      {cell.name}
                      {this.state.orderBy === cell.name ? (
                        <span style={sortSpanClass}>
                          {this.state.order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </span>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.solutions.map(solution => (
                <TableRow
                  key={solution.packerName}
                  onClick={_ => this.onSelectedPackerChange(solution)}
                  selected={this.state.selected === solution.packerName}
                >
                  {cells.map(cell => (
                    <TableCell key={cell.name} scope="row">
                      {cell.accesor(solution)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default PackerTable;
