import ContactMail from '@material-ui/icons/ContactMail';
import Contacts from '@material-ui/icons/Contacts';
import React from "react";

export const NAVIGATIONS_MENU = [
  {
    label: "Users",
    icon: <Contacts />,
    link: "/users",
  },
  {
    label: "Contacts",
    icon: <ContactMail />,
    link: "/contacts",
  }
];
