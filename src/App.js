import React from 'react';
import './App.css';
import Chart from './Chart.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            files: [],
            isFile: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSelectedFileChange = this.onSelectedFileChange.bind(this);
        this.onSelectedModeChange = this.onSelectedModeChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            file: event.target.files[0],
            files: this.state.files,
            isFile: this.state.isFile
        });
    }

    onSelectedFileChange(event) {
        this.setState({
                        file: event.target.value,
                        files: this.state.files,
                        isFile: this.state.isFile
                    });
    }

    onSelectedModeChange(event) {
        this.setState({
            file: this.state.file,
            files: this.state.files,
            isFile: event.target.value === "true"
        });
        if (event.target.value === "true") {
            fetch("http://localhost:4567/").then(response => 
                response.json().then(data =>
                    this.setState({
                        file: data[0],
                        files: data,
                        isFile: this.state.isFile
                    })
                )
            )
        }
    }

    render() {
        return (
            <div>
                <p>
                    <input onChange={this.onSelectedModeChange}
                           type="radio" id="single"
                           name="mode" value="false"/>
                    <label form="single">Single</label>
                </p>
                <p>
                    <input onChange={this.onSelectedModeChange}
                           type="radio" id="multi"
                           name="mode" value="true"/>
                    <label form="multi">Multi</label>
                </p>
                --------------------------
                    { this.state.isFile ? (
                        this.state.files.map( (file, index) => {return (
                                        <p key={file}>
                                            <input onChange={this.onSelectedFileChange}
                                                   type="radio" id={file}
                                                   name="fileName" value={file}/>
                                            <label form={file}>{file}</label>
                                        </p>
                                     );})
                        ):(
                        <div>
                             <input id="file-input" type="file" name="name" onChange={this.handleChange}/>
                        </div>)
                    }
                -----------------------
                <Chart file={this.state.file}/>
            </div>
        );
    }
}

export default App;
