import SidebarHeader from "./components/sidebarHeader";
import menus from "../../data/menus";
import Menus from "./components/menus";

const sidebar = () => {
  return (
    <aside className="relative w-[272px] z-10 p-6 bg-white h-screen sticky top-0 border-l primary-border-color">
      <SidebarHeader />
      <Menus menus={menus} />
    </aside>
  );
};

export default sidebar;
