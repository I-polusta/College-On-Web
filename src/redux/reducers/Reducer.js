const Reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ANNOUNCEMENT":
      return state.concat([action.data]);
    case "DELETE_ANNOUNCEMENT":
      return state.filter((announcement) => announcement.id !== action.id);
    case "EDIT_ANNOUNCEMENT":
      return state.map((announcement) =>
        announcement.id === action.id
          ? { ...announcement, editing: !announcement.editing }
          : announcement
      );
    case "UPDATE":
      return state.map((announcement) => {
        if (announcement.id === action.id) {
          return {
            ...announcement,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !announcement.editing,
          };
        } else return announcement;
      });
    case "ADD_FACULTY":
      return state.concat([action.data]);
    case "DELETE_FACULTY":
      return state.filter((faculty) => faculty.id !== action.id);
    case "EDIT_FACULTY":
      return state.map((faculty) =>
        faculty.id === action.id
          ? { ...faculty, editing: !faculty.editing }
          : faculty
      );
    case "UPDATE_FACULTY":
      return state.map((faculty) => {
        if (faculty.id === action.id) {
          return {
            ...faculty,
            name: action.data.newName,
            email: action.data.newEmail,
            dept: action.data.newDept,
            editing: !faculty.editing,
          };
        } else return faculty;
      });
    case "ADD_REPORT":
      return state.concat([action.data]);
    case "DELETE_REPORT":
      return state.filter((reports) => reports.id !== action.id);
    case "ADD_STUDENT_DETAILS":
      return state.concat([action.data]);
    case "EDIT_STUDENT_DETAILS":
      return state.map((AllDetail) =>
        AllDetail.id === action.id
          ? { ...AllDetail, editing: !AllDetail.editing }
          : AllDetail
      );
    case "UPDATE_STUDENT_DETAILS":
      return state.map((AllDetail) => {
        if (AllDetail.id === action.id) {
          return {
            ...AllDetail,
            studentNo: action.data.newstudentNo,
            uniRollNo: action.data.newuniRollNo,
            Course: action.data.newCourse,
            branch: action.data.newbranch,
            dob: action.data.newdob,
            sem: action.data.newsem,
            username: action.data.newusername,
            mobNo: action.data.newmobNo,
            gender: action.data.newgender,
            category: action.data.newcategory,
            father: action.data.newfather,
            mother: action.data.newmother,
            fatherNo: action.data.newfatherNo,
            motherNo: action.data.newmotherNo,
            address: action.data.newadress,
            district: action.data.newdistrict,
            city: action.data.newity,
            pincode: action.data.newpincode,
            state: action.data.newstate,
            cls: action.data.newcls,

            editing: !AllDetail.editing,
          };
        } else return AllDetail;
      });
    default:
      return state;
  }
};
export default Reducer;
