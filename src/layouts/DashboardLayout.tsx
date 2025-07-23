import { Outlet, Link } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h2>Dashboard Layout</h2>
      <Outlet />
    </div>
  );
}
