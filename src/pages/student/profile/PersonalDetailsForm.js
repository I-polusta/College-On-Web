import React, { Component } from "react";
import { connect } from "react-redux";
import "./pdform.css";
import service_name from "../../../API/StudentService";
export class PersonalDetailsForm extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const studentNo = this.getStudentNo.value;

    const uniRollNo = this.getUniRollNo.value;
    const course = this.getCourse.value;
    const branch = this.getBranch.value;
    const dob = this.getDob.value;
    const sem = this.getSem.value;
    const username = this.getUsername.value;
    const mobNo = this.getMobNo.value;
    const gender = this.getGender.value;
    const category = this.getCategory.value;
    const father = this.getFatherName.value;
    const mother = this.getMother.value;
    const fatherNo = this.getFatherNo.value;
    const motherNo = this.getMotherNo.value;
    const address = this.getAddress.value;
    const city = this.getCity.value;
    const pincode = this.getPincode.value;
    const state = this.getState.value;
    const cls = this.getSection.value;
    const tenth = this.getTenth.value;
    const passingYear10 = this.getPassingYear10.value;
    const twelfth = this.getTwelfth.value;
    const tenthBoard = this.getTenthBoard.value;
    const twelfthBoard = this.getTwelfthBoard.value;
    const passingYear12 = this.getPassingYear12.value;
    const name = this.getName.value;
    const data = {
      id: studentNo,
      name,
      studentNo,
      uniRollNo,
      course,
      branch,
      dob,
      sem,
      username,
      mobNo,
      gender,
      category,
      father,
      mother,
      fatherNo,
      motherNo,
      address,
      city,
      pincode,
      state,
      cls,
      tenth,
      passingYear10,
      twelfth,
      tenthBoard,
      twelfthBoard,
      passingYear12,
      editing: false,
    };
    const data__API = {
      studentNo,
      name,
      uniRollNo,
      course,
      branch,
      dob,
      sem,
      username,
      mobNo,
      gender,
      category,
      father,
      mother,
      fatherNo,
      motherNo,
      address,
      city,
      pincode,
      state,
      cls,
      tenth,
      passingYear10,
      twelfth,
      tenthBoard,
      twelfthBoard,
      passingYear12,
    };
    this.props.dispatch({
      type: "ADD_STUDENT_DETAILS",
      data,
    });
    await service_name
      .createStudentDetails(data__API)
      .then((response) => {
        console.log(response);
        if (response.data === "success");
        {
          window.alert("Details Saved");
          this.props.history.push({
            pathname: `/show-personal-student`,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="pd__main__container">
        <div className="pd__form__container">
          <form onSubmit={this.handleSubmit}>
            <h1>UPDATE PERSONAL DETAILS </h1>
            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getName = input)}
                placeholder="Full Name"
              />
              <input
                required
                type="number"
                ref={(input) => (this.getStudentNo = input)}
                placeholder="Student No."
              />
            </div>
            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getCourse = input)}
                placeholder="Course Name"
              />
              <input
                required
                type="text"
                ref={(input) => (this.getBranch = input)}
                placeholder="Branch Name "
              />
            </div>
            <div className="form__divs">
              <input
                required
                type="number"
                ref={(input) => (this.getUniRollNo = input)}
                placeholder="University Roll No."
              />
              <input
                required
                type="number"
                ref={(input) => (this.getSem = input)}
                placeholder="Semester"
              />
            </div>
            <div className="form__divs">
              <input
                required
                type="date"
                ref={(input) => (this.getDob = input)}
                placeholder="Date of Birth"
              />
              <input
                required
                type="number"
                ref={(input) => (this.getMobNo = input)}
                placeholder="Mobile Number"
              />
            </div>
            <div className="form__divs">
              <input
                required
                type="email"
                ref={(input) => (this.getUsername = input)}
                placeholder="Email"
              />
              <input
                required
                type="text"
                ref={(input) => (this.getCategory = input)}
                placeholder="Category"
              />
            </div>

            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getGender = input)}
                placeholder="Gender"
              />
              <input
                required
                type="text"
                ref={(input) => (this.getMother = input)}
                placeholder="Mother's Name"
              />
            </div>

            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getFatherName = input)}
                placeholder="Father's Name"
              />
              <input
                required
                type="number"
                ref={(input) => (this.getMotherNo = input)}
                placeholder="Mother's Mobile"
              />
            </div>

            <div className="form__divs">
              <input
                required
                type="number"
                ref={(input) => (this.getFatherNo = input)}
                placeholder="Father'Mobile"
              />
              <input
                required
                type="number"
                ref={(input) => (this.getPincode = input)}
                placeholder="Pincode"
              />
            </div>

            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getAddress = input)}
                placeholder="Address"
              />
              <input
                required
                type="text"
                ref={(input) => (this.getCity = input)}
                placeholder="City"
              />
            </div>

            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getSection = input)}
                placeholder="Section"
              />

              <input
                required
                type="text"
                ref={(input) => (this.getState = input)}
                placeholder="State"
              />
            </div>

            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getTenth = input)}
                placeholder="10th Percentage"
              />
              <input
                required
                type="number"
                ref={(input) => (this.getPassingYear12 = input)}
                placeholder="12th Passing year"
              />
            </div>
            <div className="form__divs">
              <input
                required
                type="number"
                ref={(input) => (this.getPassingYear10 = input)}
                placeholder="10th Passing Year"
              />
              <input
                required
                type="text"
                ref={(input) => (this.getTwelfth = input)}
                placeholder="12th Percentage"
              />
            </div>
            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getTenthBoard = input)}
                placeholder="10th BOARD"
              />
              <input
                required
                type="text"
                ref={(input) => (this.getTwelfthBoard = input)}
                placeholder="12th BOARD"
              />
            </div>
            <div className="form__divs__btn">
              <button className="pd__form__btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(PersonalDetailsForm);
