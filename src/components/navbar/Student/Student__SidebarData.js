import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const StudentSidebarData = [
  {
    title: "Profile",
    path: "/show-personal-student",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Attendance",
    path: "/view-attendance-student",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Announcements",
    path: "/all-announcements-onlyview",
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
    title: "Result",
    path: "/view-marks",
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
    path: "/resetStudent",
    icon: <IoIcons.IoMdLogOut />,
    cName: "nav-text",
  },
];
