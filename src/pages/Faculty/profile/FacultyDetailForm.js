import React, { Component } from "react";
import { connect } from "react-redux";
import service_name from "../../../API/FacultyService";
export class FacultyDetailForm extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const teacherId = this.getTeacherId.value;
    const name = this.getName.value;
    const department = this.getDepartment.value;
    const dob = this.getDob.value;
    const username = this.getUsername.value;
    const mob = this.getMobNo.value;
    const gender = this.getGender.value;
    const district = this.getDistrict.value;
    const category = this.getCategory.value;
    const address = this.getAddress.value;
    const pincode = this.getPincode.value;
    const state = this.getState.value;
    const city = this.getCity.value;
    const ug = this.getUg.value;
    const pg = this.getPg.value;
    const phd = this.getPhd.value;
    const specialization = this.getSpecial.value;
    const ugYear = this.getUgyear.value;
    const pgYear = this.getpgYear.value;
    const phdYear = this.getPhdYear.value;
    const data = {
      id: teacherId,
      name,
      department,
      dob,
      username,
      mob,
      gender,
      category,
      address,
      district,
      pincode,
      state,
      city,
      ug,
      pg,
      phd,
      specialization,
      ugYear,
      pgYear,
      phdYear,
    };
    const data__API = {
      teacherId,
      name,
      department,
      dob,
      username,
      mob,
      gender,
      district,
      category,
      address,
      pincode,
      state,
      city,
      ug,
      pg,
      phd,
      specialization,
      ugYear,
      pgYear,
      phdYear,
    };
    await service_name
      .createTeacherDetails(data__API)
      .then((response) => {
        console.log(response);
        if (response.data === "success");
        {
          window.alert("Details Saved");
          this.props.history.push({
            pathname: `/show-personal-teacher`,
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
                ref={(input) => (this.getTeacherId = input)}
                placeholder="Teacher ID"
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
                ref={(input) => (this.getDistrict = input)}
                placeholder="District"
              />
              <input
                required
                type="text"
                ref={(input) => (this.getDepartment = input)}
                placeholder="Department"
              />
            </div>
            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getState = input)}
                placeholder="State"
              />
              <input
                required
                type="text"
                ref={(input) => (this.getUg = input)}
                placeholder="UG COURSE"
              />
            </div>
            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getPg = input)}
                placeholder="PG COURSE"
              />
              <input
                required
                type="text"
                ref={(input) => (this.getPhd = input)}
                placeholder="PHD"
              />
            </div>
            <div className="form__divs">
              <input
                required
                type="text"
                ref={(input) => (this.getSpecial = input)}
                placeholder="SPECIALIZATION"
              />
              <input
                required
                type="number"
                ref={(input) => (this.getUgyear = input)}
                placeholder="UG YEAR"
              />
            </div>
            <div className="form__divs">
              <input
                required
                type="number"
                ref={(input) => (this.getpgYear = input)}
                placeholder="PG YEAR"
              />
              <input
                required
                type="numer"
                ref={(input) => (this.getPhdYear = input)}
                placeholder="PHD YEAR"
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

export default connect()(FacultyDetailForm);
