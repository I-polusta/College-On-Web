import React, { Component } from "react";
import { connect } from "react-redux";
class Edit_Announcements extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage,
    };
    this.props.dispatch({
      type: "UPDATE",
      id: this.props.announcement.id,
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
            ref={(input) => (this.getTitle = input)}
            defaultValue={this.props.announcement.title}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={(input) => (this.getMessage = input)}
            defaultValue={this.props.announcement.message}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(Edit_Announcements);
