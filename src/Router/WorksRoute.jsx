import UrlParametor from "../components/UrlParametor";
import Works from "../components/Works";

export const WorksRoute = [
  {
    path: "/",
    exact: true,
    children: <Works />,
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParametor />,
  },
];
