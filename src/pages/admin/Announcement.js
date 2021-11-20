import React, { Component } from "react";
import { connect } from "react-redux";
import service_name from "../../API/Announcement_service";

export class Announcement extends Component {
  handleDelete = async (e) => {
    // e.preventDefault();
    const date = this.props.announcement.date;
    const data = {
      date,
    };
    console.log(data);
    this.props.dispatch({
      type: "DELETE_ANNOUNCEMENT",
      id: this.props.announcement.id,
    });
    await service_name
      .deleteAnnouncement(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <p>{this.props.announcement.date} </p>
        <h2>{this.props.announcement.title}</h2>
        <p>{this.props.announcement.message}</p>

        <button
          onClick={() =>
            this.props.dispatch({
              type: "EDIT_ANNOUNCEMENT",
              id: this.props.announcement.id,
            })
          }
        >
          Edit{console.log("working")}
        </button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default connect()(Announcement);
