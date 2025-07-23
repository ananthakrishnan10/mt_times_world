import { Outlet, Link } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div>
      <nav>
        <Link to="/auth/login">Login</Link> |{' '}
        <Link to="/auth/register">Register</Link>
      </nav>
      <h2>Auth Layout</h2>
      <Outlet />
    </div>
  );
}
