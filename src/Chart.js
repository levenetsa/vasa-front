import React from 'react';

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
      console.log(this)

        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(this)
            }
        }
    }
    //rawFile.
    rawFile.send(null);
}

class Chart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      path: '',
      content: ''
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.props.filePath === this.state.path){
      console.log('same2')
      return
    }
    console.log('stste change')
    this.setState({
      path: this.props.filePath,
      content: this.state.content
    });
    readTextFile(this.props.filePath)
   }
  
  render(){
    return (
      <div>
        {this.state.path}
        {this.state.content}
      </div>
    );
  }
}

export default Chart;
