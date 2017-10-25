import React from 'react';
import Link from 'gatsby-link';

class Speaking extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        Heyyyy
        <p>Current count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Add</button>
      </div>
    );
  }
}

export default Speaking;
