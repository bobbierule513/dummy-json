import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { ROUTES } from '@/lib/constants/routes';

const NoRouteFound = React.lazy(() => import('@/pages/404'));
const UsersPage = React.lazy(() => import('@/pages/users'));

export default function App() {
  return (
    <Router>
      <main className="bg-secondary-50 h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES.USERS} element={<UsersPage />} />
            <Route path="*" element={<NoRouteFound />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}
