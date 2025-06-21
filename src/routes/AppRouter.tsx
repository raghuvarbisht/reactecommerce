// src/routes/AppRouter.tsx
import { Routes, Route } from 'react-router-dom';
import { routes } from './routesConfig';
import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
  return (
    <Routes>
      {routes.map(({ path, element, protected: isProtected }) => (
        <Route
          key={path}
          path={path}
          element={
            isProtected ? (
              <PrivateRoute>{element}</PrivateRoute>
            ) : (
              element
            )
          }
        />
      ))}
    </Routes>
  );
}
