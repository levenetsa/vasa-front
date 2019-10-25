import React from 'react';

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

class Chart extends React.Component {

  constructor() {
    super();
      console.log('nahuia')
    this.state = {
      filePath: ''
    }
  }

  componentDidMount(){
     /*if (newProps.filePath === this.state.filePath){
      console.log('same1')
      return
    }*/
      console.log('same1')
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.props.filePath === prevProps.filePath){
      console.log('same2')
      return
    }
    console.log('stste change')
    this.setState({
      filePath: this.props.filePath
    });
    preventDefault();
   }
  
  render(){
      console.log('render')
    if (this.state.filePath !== ''){
      //readTextFile(this.state.filePath)
      console.log('render2')
    }
    return (
      <dev>
        {this.state.filePath}
      </dev>
    );
  }
}

export default Chart;
