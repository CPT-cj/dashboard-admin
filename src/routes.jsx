import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home/page";
import Comments from "./pages/Comments/page";
import Products from "./pages/Products/page";
import Tickets from "./pages/Tickets/page";
import TicketDetails from "./pages/TicketDetails/page";
import Users from "./pages/Users/page";
import DashboardLayout from "./components/dashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "tickets/:ticketId",
        element: <TicketDetails />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
