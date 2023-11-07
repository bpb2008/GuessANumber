import React, { Component } from "react";
import Result from "./Components/Result";
import './App.css'

class App extends Component {
  static defaultProps = {
    randomNum: Math.floor(Math.random() * 100) + 1,
  };

  constructor(props) {
    super(props);
    this.state = { userNum: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="head">
          <label htmlFor="userNum">Guess a number between 1 and 100!</label>
        </div>
        <input
          id="userNum"
          type="text"
          name="userNum"
          value={this.state.userNum}
          onChange={this.handleChange}
        />
        <Result
          userNum={this.state.userNum}
          computerNum={this.props.randomNum}
        />
      </div>
    );
  }
}

export default App;
