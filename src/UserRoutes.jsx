import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Завантаження сторінки</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/regestration" element={<RegistrationPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
