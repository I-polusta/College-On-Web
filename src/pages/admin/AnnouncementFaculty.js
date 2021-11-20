import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import service_name from "../../API/Announcement_service";
import "./announcement.css";
import FacultyNavbar from "../../components/navbar/faculty/FacultyNavbar";
import FacultySidebar from "../../components/navbar/faculty/FacultySidebar";
import { BaseUrl } from "../../API/BaseUrl";
export class AnnouncementsFaculty extends Component {
  state = {
    announcements: [],
  };
  async componentDidMount(announcements) {
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
        <FacultyNavbar />
        <FacultySidebar />
        <div className="root__container">
          <div className="container__one">
            <div className="container__top">
              <div className="heading__component">
                <h2>ALL ANNOUNCEMENTS</h2>
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

export default connect(mapStateToProps)(AnnouncementsFaculty);
