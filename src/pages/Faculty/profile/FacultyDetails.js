import React, { Component } from "react";
import { connect } from "react-redux";
import Admin__Navbar from "../../../components/navbar/admin/Admin__Navbar";
import Admin__Sidebar from "../../../components/navbar/admin/Admin__Sidebar";
import axios from "axios";
import { BaseUrl } from "../../../API/BaseUrl";
import { Link } from "react-router-dom";
import FacultyNavbar from "../../../components/navbar/faculty/FacultyNavbar";
import FacultySidebar from "../../../components/navbar/faculty/FacultySidebar";

export class FacultyDetails extends Component {
  state = {
    AllDetails: [],
  };
  async componentDidMount() {
    const token = localStorage.getItem("user");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    };
    axios
      .get(BaseUrl() + "show/details/teacher", { headers })
      .then((response) => {
        console.log(response);

        const Det = Object.keys(response.data);
        const DetVal = Object.values(response.data);
        //       Det && Det.map((info,index) => {
        //         let Obj = {
        //           info:DetVal[index]
        //         }
        // AllDetails.push(Obj)
        //       })
        //         console.log(Det);
        this.setState({ Det, DetVal });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { AllDetails, Det, DetVal } = this.state;

    return (
      <>
        <FacultyNavbar />
        <FacultySidebar />
        <div className="root__container">
          <div className="container__one">
            <div className="view__faculty">
              <div className="table__reports">
                <table>
                  {Det &&
                    Det.map((name, index) => {
                      return (
                        <>
                          <tr>
                            <td>{`${name}:`}</td>
                            <td>{`${DetVal && DetVal[index]}`}</td>
                          </tr>
                        </>
                      );
                    })}
                </table>
                <div className="btn__details__dash">
                  <Link to="/personal-details-student">
                    <button>Edit</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    AllDetails: state,
  };
};

export default connect(mapStateToProps)(FacultyDetails);

// <div>
// {Det && Det.map((name,index)=>{
//   return(
//     <h2>{`${name}:${DetVal && DetVal[index]}`}</h2>
//   )
// })}
//      </div>
