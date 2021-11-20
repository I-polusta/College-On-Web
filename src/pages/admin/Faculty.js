import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./faculty.css";
import { Link } from "react-router-dom";
import axios from "axios";
import service_name from "../../API/FacultyService";
import { BaseUrl } from "../../API/BaseUrl";
import Admin__Navbar from "../../components/navbar/admin/Admin__Navbar";
import Admin__Sidebar from "../../components/navbar/admin/Admin__Sidebar";

export class faculty extends Component {
  state = {
    faculty: [],
  };

  data = () => {
    axios
      .get(BaseUrl() + "show/teachers")
      .then((response) => {
        console.log(response);
        const faculty = response.data;
        this.setState({ faculty });
        console.log(typeof faculty);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async componentDidMount() {
    this.data();
  }
  handleDelete = async (info) => {
    const username = info.username;
    const id = this.props.faculty.id;
    const data = {
      username,
    };
    console.log(data);
    this.data();
    console.log(id);
    this.props.dispatch({
      type: "DELETE_FACULTY",
      id: this.props.faculty.id,
    });

    await service_name
      .deleteFaculty(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { faculty } = this.state;
    return (
      <>
        <Admin__Navbar />
        <Admin__Sidebar />
        <div className="root__container">
          <div className="container__one">
            <div className="container__top">
              <div>
                <Link to="/addfaculty">
                  <button className="view__faculty__btn">ADD FACULTY</button>
                </Link>
              </div>
              <div>
                <select className="view__faculty__btn">
                  <option> CSE</option>
                  <option> CS</option>
                  <option> CSE(DS)</option>
                  <option> CSE(AI/ML)</option>
                  <option> CS IT</option>
                  <option> IT</option>
                  <option> ECE</option>
                  <option> EN</option>
                  <option> ME</option>
                  <option> CIVIL</option>
                </select>
              </div>
            </div>

            <div className="table__reports">
              <table>
                <tr>
                  <th>NAME</th>
                  <th>E-MAIL</th>
                  <th>SECTION</th>
                  <th>ACTION</th>
                </tr>
                {this.state.faculty.map((info) => {
                  return (
                    <>
                      <tr>
                        <td>{info.name}</td>
                        <td>{info.username}</td>
                        <td>{info.department}</td>
                        <td>
                          <button
                            className="delete__faculty"
                            onClick={() => this.handleDelete(info)}
                          >
                            Delete
                          </button>
                        </td>
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

const mapStateToProps = (state) => {
  return {
    faculty: state,
  };
};
export default connect(mapStateToProps)(faculty);
