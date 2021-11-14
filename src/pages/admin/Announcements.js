import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import Announcement from "./Announcement";
import Edit_Announcements from "./Edit_Announcements";
import axios from "axios";
import service_name from "../../API/Announcement_service";

function Announcements(props) {
  const API_URL = "http://192.168.0.124:8080/";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "show/announcement")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const DisplayData = data.map((info) => {
    return (
      <tr>
        <td>{info.date}</td>
        <td>{info.subject}</td>
        <td>{info.announcement}</td>
      </tr>
    );
  });

  // this.componentDidMount() {
  //   e.preventDefault();
  //   await service_name.viewAnnouncement().then((response) => {
  //     // console.log(response);
  //     entries = response.data;
  //     console.log(entries);
  //   });
  // };

  return (
    <div>
      <h1>All Posts</h1>
      {/* 
      {this.props.announcements.map((announcement) => (
        <div key={announcement.id}>
          {announcement.editing ? (
            <Edit_Announcements
              announcement={announcement}
              key={announcement.id}
            />
          ) : (
            <Announcement key={announcement.id} announcement={announcement} />
          )}
        </div>
      ))} */}

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    announcements: state,
  };
};

export default connect()(Announcements);
