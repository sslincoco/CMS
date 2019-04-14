import React, { Component } from "react";
import './list.less'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  onClick = () => {
    this.setState({
      count: ++this.state.count
    })
  }

  render() {

    return <div className='pagelist'>
      <p>页面A</p>
      <p>页面B</p>
      <p>页面C</p>
      <div >
        <span className='count'>{this.state.count}</span>
        <button onClick={this.onClick}>点击加11</button>
      </div>
    </div>;
  }
}
