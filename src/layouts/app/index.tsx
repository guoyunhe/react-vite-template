import { AuthProvider } from '@guoyunhe/react-auth';
import { Outlet } from 'react-router-dom';

// Layout of the main app for registered users
export default function AppLayout() {
  return (
    <AuthProvider>
      <div>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    </AuthProvider>
  );
}
