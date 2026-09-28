import { Outlet } from "react-router";
import Sidebar from "../features/sidebar/sidebar";
import Topbar from "../features/topbar/topbar";
import BackgroundOverlay from "./common/backgroundOverlay";

const dashboardLayout = () => {
  return (
    <main id="root" className="flex">
      <Sidebar />
      <section className="grow *:px-6">
        <Topbar />
        <div id="content" className="mt-6 container mx-auto ">
          <div className="relative z-10">
            <Outlet />
          </div>
          <BackgroundOverlay />
        </div>
      </section>
    </main>
  );
};

export default dashboardLayout;
