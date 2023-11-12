import { Outlet } from 'react-router-dom';

export default function DefaultMobileLayout() {
  return (
    <main className={'flex flex-col h-screen bg-white min-h-screen'}>
      <Outlet />
    </main>
  );
}
