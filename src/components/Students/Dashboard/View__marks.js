import React, { Component } from "react";
import axios from "axios";
import { BaseUrl } from "../../../API/BaseUrl";
import { connect } from "react-redux";
import Admin__Navbar from "../../../components/navbar/admin/Admin__Navbar";
import Admin__Sidebar from "../../../components/navbar/admin/Admin__Sidebar";
import StudentSidebar from "../../navbar/Student/StudentSidebar";
import StudentNavbar from "../../navbar/Student/StudentNavbar";
import "./View__Attenance.css";
export class View__marks extends Component {
  state = {
    marks: [],
  };

  async componentDidMount() {
    const token = localStorage.getItem("user");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    };
    axios
      .get(BaseUrl() + "show/result", { headers })
      .then((response) => {
        console.log(response);
        const marks = response.data;
        this.setState({ marks });
        if (marks.length === 0) alert("marks not updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { marks } = this.state;
    return (
      <>
        <StudentSidebar />
        <StudentNavbar />
        <div className="root__container">
          <div className="container__one">
            <div className="view__faculty">
              <div className="table__reports">
                {" "}
                <table>
                  {marks.map((info) => {
                    return (
                      <>
                        <tr>
                          <td>{info.subject}</td>
                          <td> {info.marks}</td>{" "}
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default View__marks;
