import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 0,
  };

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

  render() { 
    return (
      <React.Fragment>
      <span style = {this.styles} className={this.getBadgeColor()}>{this.formatCount()}</span>
      <button className='btn btn-secondary btn-sm'>Increment</button>
      </React.Fragment>
    );
  }
}
 
export default Counter;