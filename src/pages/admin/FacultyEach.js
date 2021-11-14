import React, { Component } from "react";
import { connect } from "react-redux";

export class FacultyEach extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.faculty.name}</h2>
        <p>{this.props.faculty.email}</p>
        <p>{this.props.faculty.dept}</p>
        <button
          onClick={() =>
            this.props.dispatch({
              type: "EDIT_FACULTY",
              id: this.props.faculty.id,
            })
          }
        >
          Edit
        </button>
        <button
          onClick={() =>
            this.props.dispatch({
              type: "DELETE_FACULTY",
              id: this.props.faculty.id,
            })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(FacultyEach);
