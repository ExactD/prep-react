import React, { useEffect, useState, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import API_BASE_URL from '../API-BASE-URL';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        
        const headers: HeadersInit = {
          'Content-Type': 'application/json',
        };

        // Додаємо токен до заголовків, якщо він є
        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }

        const res = await fetch(`${API_BASE_URL}/profile`, {
          method: 'GET',
          credentials: 'include', // Для cookies
          headers,
        });

        if (res.ok) {
          setIsAuth(true);
        } else {
          // Якщо запит неуспішний, видаляємо невалідний токен
          if (token) {
            localStorage.removeItem("token");
          }
          setIsAuth(false);
        }
      } catch (err) {
        console.error('Помилка перевірки авторизації:', err);
        
        // Видаляємо токен при помилці
        const token = localStorage.getItem("token");
        if (token) {
          localStorage.removeItem("token");
        }
        
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px'
      }}>
        Завантаження...
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;