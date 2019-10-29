import React from 'react';
import './App.css';
import Chart from './Chart.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            file: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.files[0].name,
            file: event.target.files[0]
        });
    }

    render() {
        return (
            <div>
                <input id="file-input" type="file" name="name" onChange={this.handleChange}/>
                <Chart file={this.state.file}/>
            </div>
        );
    }
}

export default App;
