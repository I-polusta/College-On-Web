import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BaseUrl } from "../../API/BaseUrl";
import StudentNavbar from "../../components/navbar/Student/StudentNavbar";
import StudentSidebar from "../../components/navbar/Student/StudentSidebar";
import "./report.css";
export class ReportForm extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const user = this.getUser.value;
    const problem = this.getMessage.value;
    var today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
    const data = {
      id: new Date(),
      user,
      problem,
    };
    const dataReport = {
      user,
      date,
      problem,
    };
    console.log(data);
    this.props.dispatch({
      type: "ADD_REPORT",
      data,
    });
    this.getUser.value = "";
    this.getMessage.value = "";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    };
    await axios
      .post(BaseUrl() + "report/student", dataReport, { headers })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <>
        <StudentSidebar />
        <StudentNavbar />
        <div className="root__container">
          <div className="container__one">
            <div className="container__top">
              <div className="heading__component">
                <h2>Create Report</h2>
              </div>
            </div>
            <div className="report__form">
              <form onSubmit={this.handleSubmit}>
                <input
                  required
                  type="text"
                  ref={(input) => (this.getUser = input)}
                  placeholder="Enter your name"
                />

                <textarea
                  required
                  rows="5"
                  ref={(input) => (this.getMessage = input)}
                  cols="28"
                  placeholder="Enter Report"
                />
                <button className="view__faculty__btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(ReportForm);
