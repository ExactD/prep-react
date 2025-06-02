import React, { useEffect, useState, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

const API_BASE_URL = 'http://localhost:5415';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/profile`, {
          method: 'GET',
          credentials: 'include',
        });

        setIsAuth(res.ok);
      } catch (err) {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) {
    // Поки не відомо, чи авторизований — можна показати спіннер або null
    return <div>Завантаження...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>; // коли авторизований — показуємо children
};

export default ProtectedRoute;
