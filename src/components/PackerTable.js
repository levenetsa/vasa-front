import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { updateState } from "../utils/utils.js";

class PackerTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            solutions: props.solutions,
            selected: props.solutions[0]
        }

        this.onSelectedPackerChange = this.onSelectedPackerChange.bind(this);
        this.updateState = updateState.bind(this);
    }

    onSelectedPackerChange(solution) {
      this.updateState({
        selected: solution
      });
    }

    componentDidUpdate(prevProps) {
      if (this.state.solutions !== prevProps.solutions) {
        this.updateState({
          solutions: this.props.solutions,
          selected: this.props.solutions[0]
        });
      }
    }
  
    render() {
        //TO DO: pass state up
        return (<Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Packer Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Cut</TableCell>
              <TableCell align="right">Pack</TableCell>
              <TableCell align="right">Efficency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.solutions.map(row => (
              <TableRow key={row.packerName}
                selected={this.state.selected.packerName === row.packerName}
                onClick={event => this.onSelectedPackerChange(row)}>
                <TableCell component="th" scope="row">
                  {row.packerName}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.cutCost}</TableCell>
                <TableCell align="right">{row.packCost}</TableCell>
                <TableCell align="right">{row.efficency.toFixed(3)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>);
    }
}

export default PackerTable;
