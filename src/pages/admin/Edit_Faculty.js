import React, { Component } from "react";
import { connect } from "react-redux";

export class Edit_Faculty extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newEmail = this.getEmail.value;
    const newDept = this.getDept.value;
    const newName = this.getName.value;
    const data = {
      newName,
      newEmail,
      newDept,
    };
    this.props.dispatch({
      type: "UPDATE_FACULTY",
      id: this.props.faculty.id,
      data: data,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={(input) => (this.getName = input)}
            defaultValue={this.props.faculty.name}
            placeholder="Enter Teacher Name"
          />
          <br />
          <br />

          <input
            required
            type="email"
            defaultValue={this.props.faculty.email}
            ref={(input) => (this.getEmail = input)}
            placeholder="Enter Email"
          />
          <label> Select Branch </label>
          <select
            ref={(input) => (this.getDept = input)}
            defaultValue={this.props.faculty.dept}
          >
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
          <button>UPDATE</button>
        </form>
      </div>
    );
  }
}

export default connect()(Edit_Faculty);
