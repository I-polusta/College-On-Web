import React, { Component } from "react";
import axios from "axios";
import { BaseUrl } from "../../../API/BaseUrl";
import { connect } from "react-redux";
import Admin__Navbar from "../../../components/navbar/admin/Admin__Navbar";
import Admin__Sidebar from "../../../components/navbar/admin/Admin__Sidebar";
import StudentNavbar from "../../navbar/Student/StudentNavbar";
import StudentSidebar from "../../navbar/Student/StudentSidebar";
import "./View__Attenance.css";
export class View__Attendance extends Component {
  state = {
    attendance: [],
  };

  async componentDidMount() {
    const token = localStorage.getItem("user");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    };
    axios
      .get(BaseUrl() + "show/attendance", { headers })
      .then((response) => {
        console.log(response);
        const attendance = response.data;
        this.setState({ attendance });

        // const Det = Object.keys(response.data);
        //   const DetVal = Object.values(response.data);
        //       Det && Det.map((info,index) => {
        //         let Obj = {
        //           info:DetVal[index]
        //         }
        // AllDetails.push(Obj)
        //       })
        //         console.log(Det);
        // this.setState({ Det, DetVal });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { attendance } = this.state;
    return (
      <>
        <StudentNavbar />
        <StudentSidebar />
        <div className="root__container">
          <div className="container__one">
            <div className="view__faculty12">
              <table className="table__att">
                {attendance.map((info) => {
                  return (
                    <>
                      <tr>
                        <td>{info.date}</td>
                        <td>{info.present ? "P" : "A"}</td>
                      </tr>
                    </>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(View__Attendance);
