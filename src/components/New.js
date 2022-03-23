import React, { Component } from 'react'

class New extends Component {
    constructor(){
        super()
        console.log('log');
        this.state = {
            value : '',
        }
        this.changeState = this.changeState.bind(this)
    }
changeState(){
    this.setState({
        value : 'New Value',
    })
}


  render() {
    return (
      <div>
      <button onClick={this.changeState}>Change</button>
      <h1>Test {this.state.value}</h1> 
      </div>
    )
  }
}
export default New;
