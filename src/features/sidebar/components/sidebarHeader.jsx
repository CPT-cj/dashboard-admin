import { Link } from "react-router";

const sidebarHeader = () => {
  return (
    <div className="p-6 border-b primary-border-color">
      <Link to="/" className="flex items-center gap-3">
        <img src="/images/logo.png" alt="sabz panel" className="size-6" />
        <span className="text-lg font-black text-zinc-900">پنل حاج عمو</span>
      </Link>
    </div>
  );
};

export default sidebarHeader;
