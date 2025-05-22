import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage: React.FC = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    // Додаємо клас до body тільки на стартовій сторінці
    document.body.classList.add('start-page-active');
    return () => {
      document.body.classList.remove('start-page-active');
    };
  }, []);

  const handleSubmit = () => {
    if (isLogin) {
      console.log('Логін:', { name, password });
      navigate('/tests');
    } else {
      if (password !== confirmPassword) {
        alert('Паролі не співпадають!');
        return;
      }
      console.log('Реєстрація:', { name, password });
      setIsLogin(true);
    }
  };

  return (
    <div className="start-page">
      <h1 className="start-title">Тестування знань</h1>
      <p className="start-subtitle">{isLogin ? 'Увійдіть в систему' : 'Створіть обліковий запис'}</p>

      <div className="form">
        <input
          type="text"
          placeholder="Ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
