import React, { Component } from "react";
import { connect } from "react-redux";
import service_name from "../../API/Announcement_service";

export class Create_announcement extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const subject = this.getTitle.value;
    const announcement = this.getMessage.value;
    const Odate = new Date();
    const date = Odate.toString();
    console.log(typeof date);
    console.log(subject, announcement, date);
    const details = {
      subject,
      announcement,
      date,
    };
    console.log(details);
    const data = {
      id: new Date(),
      date: Date(),
      title,
      message,
      editing: false,
    };
    this.props.dispatch({
      type: "ADD_ANNOUNCEMENT",
      data,
    });
    this.getTitle.value = "";
    this.getMessage.value = "";

    await service_name
      .createAnnouncement(details)
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
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={(input) => (this.getTitle = input)}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={(input) => (this.getMessage = input)}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default connect()(Create_announcement);
