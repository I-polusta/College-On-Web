import React, { Component } from "react";
import { connect } from "react-redux";

export class EachReport extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.report.user}</h2>
        <p>{this.props.report.message}</p>
        <button
          onClick={() =>
            this.props.dispatch({
              type: "DELETE_REPORT",
              id: this.props.report.id,
            })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(EachReport);
