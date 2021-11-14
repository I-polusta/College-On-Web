const AnnouncementReducer = (state = [], action) => {
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
    default:
      return state;
  }
};
export default AnnouncementReducer;
