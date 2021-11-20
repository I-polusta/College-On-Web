import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const FacultySidebarData = [
  {
    title: "Profile",
    path: "/show-personal-teacher",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Attendance",
    path: "/show-class-admin",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },

  {
    title: "Marks",
    path: "/result-teachers",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Announcements",
    path: "/all-announcements-onlyviewFaculty",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <IoIcons.IoMdLogOut />,
    cName: "nav-text",
  },
  {
    title: "Reset Password",
    path: "/resetFaculty",
    icon: <IoIcons.IoMdLogOut />,
    cName: "nav-text",
  },
];
