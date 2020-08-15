import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Profile",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Posts",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Gallery",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "ToDo",
    component: Notifications,
    layout: "/admin",
  },
];
export default routes;
