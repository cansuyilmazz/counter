import React from "react";

class ClassCompCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    } else {
      alert("It must be greater than 0!");
    }
  };
  render() {
    return (
      <div className="container text-center mt-4">
        <h2 className="text-danger">Class Component</h2>
        <h3 className="display-6">Count: {this.state.count} </h3>
        <button onClick={this.increment} className="btn btn-success">
          Salary Inc
        </button>
        <button
          onClick={() => this.setState({ count: 0 })}
          className="btn btn-danger"
        >
          CLR
        </button>
        <button onClick={this.decrement} className="btn btn-warning">
          Salary Dec
        </button>
      </div>
    );
  }
}

export default ClassCompCounter;
