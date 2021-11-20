import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BaseUrl } from "../../API/BaseUrl";
import AdminDB from "../../components/Admin/admin_dashboard/AdminDB";
import Admin__Navbar from "../../components/navbar/admin/Admin__Navbar";
import Admin__Sidebar from "../../components/navbar/admin/Admin__Sidebar";

export class AllReports extends Component {
  state = {
    reports: [],
  };
  async componentDidMount(reports) {
    const token = localStorage.getItem("user");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    };
    axios
      .get(BaseUrl() + "show/Reports", { headers })
      .then((response) => {
        console.log(response);
        const reports = response.data;
        this.setState({ reports });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { reports } = this.state;
    return (
      <>
        <Admin__Navbar />
        <Admin__Sidebar />
        <div className="view__announcement">
          <div className="view__faculty__top__container">
            <h1>ALL reports</h1>
          </div>
          {reports.map((info) => {
            return (
              <div className="announcement__view">
                <div className="announcement__span">
                  <div className="each__announcement">
                    <h6>Date:{info.date}</h6>
                    <h2 className="h2__heading">Subject: {info.subject}</h2>
                    <p className="announcement__body">Message: {info.user}</p>
                    <p className="announcement__body">
                      Message: {info.problem}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reports: state,
  };
};
export default connect(mapStateToProps)(AllReports);
