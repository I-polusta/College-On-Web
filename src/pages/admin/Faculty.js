import React, { Component } from "react";
import { connect } from "react-redux";
import Edit_Faculty from "./Edit_Faculty";
import FacultyEach from "./FacultyEach";

export class faculty extends Component {
  render() {
    return (
      <div>
        <h1>All fACULTY</h1>
        {this.props.faculty.map((faculty) => (
          <div key={faculty.id}>
            {faculty.editing ? (
              <Edit_Faculty faculty={faculty} key={faculty.id} />
            ) : (
              <FacultyEach key={faculty.id} faculty={faculty} />
            )}
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    faculty: state,
  };
};
export default connect(mapStateToProps)(faculty);
