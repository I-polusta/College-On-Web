import axios from "axios";
import React from "react";
import { useState } from "react/cjs/react.development";
import { BaseUrl } from "../../../API/BaseUrl";
import Admin__Navbar from "../../navbar/admin/Admin__Navbar";
import Admin__Sidebar from "../../navbar/admin/Admin__Sidebar";
import FacultyNavbar from "../../navbar/faculty/FacultyNavbar";
import FacultySidebar from "../../navbar/faculty/FacultySidebar";

function Fac__view__class() {
  const [cls, setCls] = useState("");
  const [arr, setArr] = useState([]);
  const data = {
    cls,
  };
  console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await axios
      .post(BaseUrl() + "show/students/class", data)
      .then((response) => {
        console.log(response);
        setArr(response.data);
        console.log(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  var today = new Date(),
    date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
  console.log(date);
  const handleAbsent = async (info) => {
    const present = false;
    const username = info.username;
    const details = {
      date,
      username,
      present,
    };
    console.log(typeof details);
    console.log(present);
    await axios
      .post(BaseUrl() + "add/attendance", details)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlePresent = async (info) => {
    const present = true;
    const username = info.username;
    const details = {
      date,
      username,
      present,
    };

    await axios
      .post(BaseUrl() + "add/attendance", details)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <FacultySidebar />
      <FacultyNavbar />
      <div className="root__container">
        <div className="container__one">
          <div className="container__top">
            <div className="heading__component">
              <select
                className="view__faculty__btn"
                onChange={(e) => setCls(e.target.value)}
              >
                <option> CSE-1</option>
                <option> CSE-2</option>
                <option> CSE-3</option>
                <option> ECE-1</option>
                <option> ECE-2</option>
                <option> ECE-3</option>
                <option> ME-1</option>
                <option> ME-2</option>
                <option> EN-1</option>
              </select>
            </div>
            <div>
              <button onClick={handleSubmit} className="view__faculty__btn">
                Get Class
              </button>
            </div>
          </div>
          <div></div>
          <div className="table__reports">
            <table>
              <tr>
                <th>Name</th>
                <th>Student No</th>
                <th>Attendance</th>
              </tr>
              {arr.map((info) => {
                return (
                  <>
                    <tr>
                      <td>{info.name}</td>
                      <td>{info.studentNo}</td>

                      <td>
                        <button
                          className="view__faculty__btn"
                          type="submit"
                          className="delete__faculty"
                          onClick={() => handlePresent(info)}
                        >
                          P
                        </button>
                        <button
                          type="submit"
                          className="delete__facultyab"
                          onClick={() => handleAbsent(info)}
                        >
                          A
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

export default Fac__view__class;
