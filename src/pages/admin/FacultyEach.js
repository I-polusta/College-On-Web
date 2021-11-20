import React, { Component } from "react";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { faculty } from "./Faculty";
import service_name from "../../API/FacultyService";
export class FacultyEach extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  handleDelete = async (e) => {
    e.preventDefault();
    const username = this.props.faculty.email;
    const id = this.props.faculty.id;
    const data = {
      username,
    };
    console.log(data);
    this.props.dispatch({
      type: "DELETE_FACULTY",
      id: id,
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
    return (
      <div className="each__faculty__container">
        <h2>{this.props.faculty.Fname}</h2>
        <p>{this.props.faculty.email}</p>
        <p>{this.props.faculty.dept}</p>
        {this.state.data.map(function (item, key) {
          return (
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.dept}</td>
            </tr>
          );
        })}

        <button className="view__faculty__btn" onClick={this.handleDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(FacultyEach);

// <tbody>
//             {this.state.data.map(function (item, key) {
//               return (
//                 <tr key={key}>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.dept}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
