import Profile from "../components/Profile";
import ProfileFrom from "../components/ProfileFrom";
import ProfileOld from "../components/ProfileOld";

export const ProfileRouter = [
  {
    path: "/",
    exact: true,
    children: <Profile />,
  },
  {
    path: "/ProfileOld",
    exact: false,
    children: <ProfileOld />,
  },
  {
    path: "/ProfileFrom",
    exact: false,
    children: <ProfileFrom />,
  },
];
