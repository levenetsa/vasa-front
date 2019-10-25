import React from 'react';
import Solution from './Solution.js'
import Rect from './Rect.js';

function readTextFile(context, file){
    var reader = new FileReader()
    reader.onload = function(){
      let result = JSON.parse(reader.result)
      context.setState({
        file: context.state.file,
        content: reader.result,
        elements: result,
        solutions: result.solutions,
        index: context.state.index
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
    }
    
    this.onSelectedChange = this.onSelectedChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (prevProps.file === null || this.props.file.size !== prevProps.file.size){
      console.log(this.props.file)
      this.setState({
        file: this.props.file,
        content: this.state.content,
        elements:this.state.elements,
        solutions:this.state.solutions,
        index:this.state.index
      });
      readTextFile(this, this.props.file)
    }
   }

   onSelectedChange(e){
    this.setState({
        file: this.state.file,
        content: this.state.content,
        elements:this.state.elements,
        solutions:this.state.solutions,
        index: e.currentTarget.value
      });
   }
  
  render(){
    console.log(this.state.elements)
    if (this.state.elements == null) {
      return (<div>No data</div>)
    }
    return (
      <div style={{ display:"flex" }}>
        <div>
          {this.state.elements.solutions.map((solution, index) => {
            return (
                <p>
                  <input onChange={this.onSelectedChange}
                    type="radio" id={solution.packerName}
                    name="packerName" value={index}/>
                  <label for={solution.packerName}>{solution.packerName}</label>
                </p>
              );
          })}
        </div>
        <Solution data={this.state.solutions[this.state.index]}/>
      </div>
    );
  }
}

export default Chart;