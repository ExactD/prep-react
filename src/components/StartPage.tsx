import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:5415';

const StartPage: React.FC = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    document.body.classList.add('start-page-active');
    
    // Функція перевірки авторизації
    const checkAuth = async () => {
      try {
        const profileResponse = await fetch(`${API_BASE_URL}/profile`, {
          method: 'GET',
          credentials: 'include',
        });
        
        if (profileResponse.ok) {
          localStorage.removeItem('testCompleted');
          navigate('/tests');
        }
      } catch (error) {
        console.error('Помилка при перевірці авторизації:', error);
      }
    };
    
    checkAuth();

    return () => {
      document.body.classList.remove('start-page-active');
    };
  }, [navigate]);

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        // Логін
        const res = await fetch(`${API_BASE_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
          console.log('Успішний вхід:', data);
          localStorage.removeItem('testCompleted');
          navigate('/tests');
        } else {
          alert(data.error || 'Помилка входу');
        }
      } else {
        // Реєстрація
        if (password !== confirmPassword) {
          alert('Паролі не співпадають!');
          return;
        }

        const res = await fetch(`${API_BASE_URL}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();
        if (res.ok) {
          console.log('Успішна реєстрація:', data);
          setIsLogin(true);
        } else {
          alert(data.error || 'Помилка реєстрації');
        }
      }
    } catch (error) {
      console.error('Помилка запиту:', error);
      alert('Сервер недоступний або сталась помилка.');
    }
  };

  return (
    <div className="start-page">
      <h1 className="start-title">Тестування знань</h1>
      <p className="start-subtitle">{isLogin ? 'Увійдіть в систему' : 'Створіть обліковий запис'}</p>

      <div className="form">
        {!isLogin && (
          <input
            type="text"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Підтвердження пароля"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button onClick={handleSubmit}>
          {isLogin ? 'Увійти' : 'Зареєструватися'}
        </button>
      </div>

      <div className="toggle-auth">
        {isLogin ? (
          <p>
            Немає акаунта?{' '}
            <button onClick={() => setIsLogin(false)}>Зареєструватися</button>
          </p>
        ) : (
          <p>
            Вже маєте акаунт?{' '}
            <button onClick={() => setIsLogin(true)}>Увійти</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default StartPage;