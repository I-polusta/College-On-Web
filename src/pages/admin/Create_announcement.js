import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import service_name from "../../API/Announcement_service";
import Admin__Navbar from "../../components/navbar/admin/Admin__Navbar";
import Admin__Sidebar from "../../components/navbar/admin/Admin__Sidebar";
import "./Create_announcement.css";

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
      <>
        <Admin__Navbar />
        <Admin__Sidebar />
        <div className="root__container">
          <div className="container__one">
            <div className="container__top">
              <div className="heading__component">
                <h2>ALL ANNOUNCEMENTS</h2>
              </div>
              <div>
                <Link
                  to="/all-announcements"
                  style={{ textDecoration: "none" }}
                >
                  <button className="viewadd__faculty__btn">
                    VIEW ANNOUNCEMENT
                  </button>
                </Link>
              </div>
            </div>
            <div className="view__faculty">
              <form
                onSubmit={this.handleSubmit}
                className="create__announcement__form"
              >
                <div className="label">
                  <label>Subject</label>
                </div>
                <input
                  required
                  type="text"
                  ref={(input) => (this.getTitle = input)}
                  placeholder="Enter Post Title"
                />
                <div className="label">
                  <label>Message</label>
                </div>
                <textarea
                  required
                  rows="5"
                  ref={(input) => (this.getMessage = input)}
                  cols="28"
                />
                <button className="viewadd__faculty__btn">
                  ADD ANNOUNCEMENT
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Create_announcement);
