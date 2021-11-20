import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import service_name from "../../API/Announcement_service";
import "./announcement.css";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../API/BaseUrl";
import Admin__Navbar from "../../components/navbar/admin/Admin__Navbar";
import Admin__Sidebar from "../../components/navbar/admin/Admin__Sidebar";
export class Announcements extends Component {
  state = {
    announcements: [],
  };
  data = () => {
    const token = localStorage.getItem("user");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    };
    axios
      .get(BaseUrl() + "show/announcement", { headers })
      .then((response) => {
        console.log(response);
        const announcements = response.data;
        this.setState({ announcements });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async componentDidMount(announcements) {
    this.data();
  }

  handleDelete = async (info) => {
    const date = info.date;
    const data = {
      date,
    };
    console.log(data);
    this.props.dispatch({
      type: "DELETE_ANNOUNCEMENT",
      id: info.id,
    });
    this.data();
    await service_name
      .deleteAnnouncement(data)
      .then((response) => {
        alert("Are you sure you want to delete the announcement");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { announcements } = this.state;
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
                  to="/create-announcements"
                  style={{ textDecoration: "none" }}
                >
                  <button className="viewadd__faculty__btn">
                    Add Announcement
                  </button>
                </Link>
              </div>
            </div>

            {announcements.map((info) => {
              return (
                <div className="announcement__view">
                  <div className="announcement__span">
                    <div className="each__announcement">
                      <h6>Date:{info.date}</h6>
                      <h2 className="h2__heading">Subject: {info.subject}</h2>
                      <p className="announcement__body">
                        Message: {info.announcement}
                      </p>
                    </div>
                    <div className="dlt__btn__container">
                      <button
                        className="dlt__btn"
                        onClick={() => this.handleDelete(info)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    announcements: state,
  };
};

export default connect(mapStateToProps)(Announcements);
