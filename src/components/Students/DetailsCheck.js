import React, { Component, useEffect } from 'react'
import axios from 'axios';
import { BaseUrl } from '../../API/BaseUrl';
import { useHistory } from 'react-router';






function DetailsCheck() {
    const history = useHistory();
    useEffect(() => {
        axios
          .get(BaseUrl() + "check/details", {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("user")}`,
            },
          })
          .then((response) => {
            console.log(response);
            if(response.data === "User details present")
            history.push({
                pathname: `/show-personal-student`,
            });
            else if(response.data === "User details not present")
            history.push({
                pathname: `/personal-details-student`,
            });
                    
           
            
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return (
        <div>

        </div>
    )
}

export default DetailsCheck























// export class DetailsCheck extends Component {
//     async componentDidMount() {
//         axios
//           .get(BaseUrl() + "check/details",{ 
//                headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${localStorage.getItem("user")}`,
//           }})
//           .then((response) => {
//             console.log(response);
//           .catch((error) => {
//             console.log(error);
//           });
//       }


//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default DetailsCheck
