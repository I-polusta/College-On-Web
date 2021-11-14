import React, { Component } from "react";
import { connect } from "react-redux";

export class Add__faculty extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.getEmail.value;
    const dept = this.getDept.value;
    const name = this.getName.value;
    const data = {
      id: new Date(),
      name,
      email,
      dept,
      editing: false,
    };
    this.props.dispatch({
      type: "ADD_FACULTY",
      data,
    });
  };
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={(input) => (this.getName = input)}
            placeholder="Enter Teacher Name"
          />
          <br />
          <br />

          <input
            required
            type="email"
            ref={(input) => (this.getEmail = input)}
            placeholder="Enter Email"
          />
          <label> Select Branch </label>
          <select ref={(input) => (this.getDept = input)}>
            <option> CSE</option>
            <option> CS</option>
            <option> CSE(DS)</option>
            <option> CSE(AI/ML)</option>
            <option> CS IT</option>
            <option> IT</option>
            <option> ECE</option>
            <option> EN</option>
            <option> ME</option>
            <option> CIVIL</option>
          </select>
          <button>ADD</button>
        </form>
      </div>
    );
  }
}

export default connect()(Add__faculty);
