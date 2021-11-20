import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const AdminSidebarData = [
  {
    title: "Faculty",
    path: "/viewfaculty",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Announcements",
    path: "/all-announcements",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/allreports",
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
    path: "/reset-admin-pw",
    icon: <IoIcons.IoMdLogOut />,
    cName: "nav-text",
  },
];
