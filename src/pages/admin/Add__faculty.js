import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import service_name from "../../API/FacultyService";
import Admin__Navbar from "../../components/navbar/admin/Admin__Navbar";
import Admin__Sidebar from "../../components/navbar/admin/Admin__Sidebar";
import "./faculty.css";

export class Add__faculty extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const email = this.getEmail.value;
    const Fname = this.getName.value;
    const dept = this.getDept.value;

    const username = this.getEmail.value;
    const name = this.getName.value;
    const department = this.getDept.value;

    const data = {
      id: new Date(),
      Fname,
      email,
      dept,
      editing: false,
    };
    const details = {
      username,
      department,
      name,
      password: "Welcome@1",
    };
    this.props.dispatch({
      type: "ADD_FACULTY",
      data,
    });
    this.getEmail.value = "";
    this.getName.value = "";
    this.getDept.value = "";

    await service_name
      .createFaculty(details)
      .then((response) => {
        console.log(response);
        if (response.data === "Teacher Saved") window.alert("Teacher added");
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
                <h2>Add Faculty</h2>
              </div>
              <div>
                <Link to="/viewfaculty" style={{ textDecoration: "none" }}>
                  <button className="viewadd__faculty__btn">
                    VIEW FACULTY
                  </button>
                </Link>
              </div>
            </div>
            <div className="add__faculty__form">
              <form onSubmit={this.handleSubmit}>
                <label className="faculty__label">Name</label>
                <div>
                  <input
                    className="faculty__name"
                    required
                    type="text"
                    ref={(input) => (this.getName = input)}
                    placeholder="Enter Teacher Name"
                  />
                </div>
                <label className="faculty__label">Email</label>
                <div>
                  <input
                    className="faculty__name"
                    required
                    type="email"
                    ref={(input) => (this.getEmail = input)}
                    placeholder="Enter Email"
                  />
                </div>
                <label className="faculty__label"> Select Branch </label>
                <div>
                  <select
                    ref={(input) => (this.getDept = input)}
                    className="add__faculty__dept__dropdown"
                  >
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
                <div>
                  <button className="add__faculty__dept__dropdown">
                    ADD FACULTY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(Add__faculty);
