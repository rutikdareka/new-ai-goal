import { Access } from "../pages/Access";

const routes = [
  {
    path: "/access",
    Component: Access,
    authRequired: false,
    restricted: false,
  },
];

export default routes;
