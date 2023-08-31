import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="min-h-full flex items-stretch">
      <main className="min-w-full ">
        <Outlet />
      </main>
    </div>
  );
};
export default Header;
