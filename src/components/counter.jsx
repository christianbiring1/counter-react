import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 0,
  };

  // constructor() {
  //   super()
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  styles = {
    fontSize: 16,
    fontWeight: 'bold',
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count
  }

  getBadgeColor() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  // handleIncrement() {
  //   console.log(this);
  // }

  handleIncrement = () => {
    console.log(this);
  }

  render() { 
    return (
      <React.Fragment>
      <span style = {this.styles} className={this.getBadgeColor()}>{this.formatCount()}</span>
      <button className='btn btn-secondary btn-sm' onClick={ this.handleIncrement }>Increment</button>
      </React.Fragment>
    );
  }
}
 
export default Counter;