import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex min-h-full items-stretch">
      <main className="flex min-w-full">
        <Outlet />
      </main>
    </div>
  );
};
export default Header;
