import React from 'react';
import './App.css';
import Chart from './Chart.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      curretPath: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      curretPath: this.state.curretPath
    });
  }

  handleSubmit(event) {
    this.setState({
      value: this.state.value,
      curretPath: this.state.value
    });
    event.preventDefault();
  }

  render() {
    return (
      <dev>
        <form onSubmit={this.handleSubmit}>
          <label>
            Путь к фаилу:
            <input value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Отправить" />
        </form>
        <Chart filePath={this.state.curretPath}/>
      </dev>
    );
  }
}

export default App;
