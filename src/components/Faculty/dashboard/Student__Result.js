import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import { BaseUrl } from "../../../API/BaseUrl";
import FacultyNavbar from "../../navbar/faculty/FacultyNavbar";
import FacultySidebar from "../../navbar/faculty/FacultySidebar";
import Marks__Popup from "./popup/Marks__Popup";
function Student__Result() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [marks, setMarks] = useState();
  const [subject, setSubject] = useState();
  const [username, setUsername] = useState();
  const togglePopup = (info) => {
    setIsOpen(!isOpen);
    setUsername(info.username);
  };

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

  const handleSubmitForm = async () => {
    const marks__details = {
      subject,
      marks,
      username,
    };
    console.log(username);
    await axios
      .post(BaseUrl() + "add/marks", marks__details)
      .then((response) => {
        console.log(response);
        if (response.data === "marks saved") history.push("/result-teachers");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <FacultyNavbar />
      <FacultySidebar />

      <div className="root__container">
        <div className="container__one">
          <div className="">
            <select
              className="add__faculty__dept__dropdown"
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
            <div>
              <button onClick={handleSubmit}>Get Class</button>
            </div>
            <div>
              {arr.map((info) => {
                return (
                  <div className="faculty__view">
                    <div className="eachfaculty__details">
                      <div className="handle__details__faculty">
                        <h2>{info.name}</h2>
                      </div>
                      <div className="handle__details__faculty">
                        <h5>{info.username}</h5>
                      </div>
                      <div className="handle__details__faculty">
                        <h5>{info.studentNo}</h5>
                      </div>
                      <input
                        type="button"
                        value="Marks"
                        onClick={() => togglePopup(info)}
                      />
                      {isOpen && (
                        <Marks__Popup
                          content={
                            <>
                              <form onSubmit={() => handleSubmitForm(info)}>
                                <select
                                  className="add__faculty__dept__dropdown"
                                  onChange={(e) => setSubject(e.target.value)}
                                >
                                  <option> DATA STRUCTURE</option>
                                  <option> DISCRETE</option>
                                  <option> COA</option>
                                  <option> CSS</option>
                                  <option> SOFT SKILLS</option>
                                  <option> OTHER ELECTIVE</option>
                                </select>
                                <input
                                  type="number"
                                  required
                                  placeholder="Marks"
                                  onChange={(e) => setMarks(e.target.value)}
                                />
                                <input type="submit" value="ADD MARKS" />
                              </form>
                            </>
                          }
                          handleClose={togglePopup}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student__Result;
