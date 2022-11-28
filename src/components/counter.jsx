import React, { Component } from 'react';
class Counter extends Component {
  state = {
    value: this.props.value,
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
    const { value } = this.state;
    return value === 0 ? 'Zero' : value
  }

  getBadgeColor() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  // handleIncrement() {
  //   console.log(this);
  // }

  handleIncrement = () => {
    this.setState( { value: this.state.value + 1 });
  }

  render() { 
    return (
      <div>
      <span style = {this.styles} className={this.getBadgeColor()}>{this.formatCount()}</span>
      <button className='btn btn-secondary btn-sm' onClick={ this.handleIncrement }>Increment</button>
      <button className='btn btn-danger btn-sm m-2' onClick={ () => this.props.onDelete(this.props.id) }>Delete</button>

      </div>
    );
  }
}
 
export default Counter;