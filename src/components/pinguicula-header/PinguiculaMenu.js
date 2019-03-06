import ContactMail from '@material-ui/icons/ContactMail';
import Contacts from '@material-ui/icons/Contacts';
import React from "react";
import {CONTACTS_ROUTE} from "../../app/PinguiculaRoutes";

export const NAVIGATIONS_MENU = [
  {
    label: "Users",
    icon: <Contacts />,
    link: "/users",
  },
  {
    label: CONTACTS_ROUTE.label,
    icon: <ContactMail />,
    link: CONTACTS_ROUTE.url,
  }
];
