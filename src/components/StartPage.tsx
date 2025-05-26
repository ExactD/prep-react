import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage: React.FC = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    document.body.classList.add('start-page-active');
    return () => {
      document.body.classList.remove('start-page-active');
    };
  }, []);

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        // Логін
        const res = await fetch('http://localhost:5400/login', {
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

        const res = await fetch('http://localhost:5400/register', {
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