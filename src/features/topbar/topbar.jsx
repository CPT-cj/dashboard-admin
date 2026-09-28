import Notifications from "./components/notifications";
import Divider from "./components/divider";
import Profile from "./components/profile";
import SearchInput from "./components/searchInput";

const topbar = () => {
  return (
    <div className="w-full h-20 relative z-10 border-b primary-border-color flex items-center justify-between">
      <div>
        <SearchInput />
      </div>
      <div className="flex items-center gap-3">
        <Notifications />
        <Divider />
        <Profile />
      </div>
    </div>
  );
};
export default topbar;
