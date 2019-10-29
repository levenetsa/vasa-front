import React from 'react';
import Solution from './Solution.js'

function readTextFile(context, file) {
    var reader = new FileReader();
    reader.onload = function () {
        let result = JSON.parse(reader.result);
        context.updateState({
            elements: result,
            solutions: result.solutions
        });
    };
    reader.readAsText(file, "UTF-8")
}

class Chart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: '',
            content: '',
            elements: null,
            solutions: [],
            index: 0
        };

        this.onSelectedChange = this.onSelectedChange.bind(this);
    }

    updateState(newValues) {
        let originalStateCopy = Object.assign({}, this.state);
        let newState = Object.assign(originalStateCopy, newValues);
        this.setState(newState)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.file === null || this.props.file.size !== prevProps.file.size) {
            this.updateState({file: this.props.file});
            readTextFile(this, this.props.file);
        }
    }

    onSelectedChange(e) {
        this.updateState({index: e.currentTarget.value});
    }

    render() {
        console.log(this.state.elements);
        if (this.state.elements == null) {
            return (<div>No data</div>)
        }
        return (
            <div>
                <div>
                    {this.state.elements.solutions.map((solution, index) => {
                        return (
                            <p key={index}>
                                <input onChange={this.onSelectedChange}
                                       type="radio" id={solution.packerName}
                                       name="packerName" value={index}/>
                                <label form={solution.packerName}>{solution.packerName}</label>
                            </p>
                        );
                    })}
                </div>
                <Solution stripWidth={this.state.elements.ctInput.stripWidth}
                          data={this.state.solutions[this.state.index]}/>
            </div>
        );
    }
}

export default Chart;