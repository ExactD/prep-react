import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../auth.css';
import API_BASE_URL from '../API-BASE-URL';

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendTimeout, setResendTimeout] = useState(0);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [passwordResetSent, setPasswordResetSent] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');
  const [codeVerified, setCodeVerified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        const profileResponse = await fetch(`${API_BASE_URL}/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Додаємо Content-Type
          },
        });
        
        if (profileResponse.ok) {
          localStorage.removeItem('testCompleted');
          navigate('/tests');
        }
      } catch (error) {
        console.error('Помилка при перевірці авторизації:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    if (resendTimeout > 0) {
      const timer = setTimeout(() => {
        setResendTimeout(resendTimeout - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setResendDisabled(false);
    }
  }, [resendTimeout]);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      if (isLogin) {
        const res = await fetch(`${API_BASE_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
          localStorage.setItem('token', data.token); // ← Зберігаємо токен!
          navigate('/tests');
        } else {
          alert(data.error || 'Помилка входу   ');
        }
      } else {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert('Будь ласка, введіть коректний email');
          setIsLoading(false);
          return;
        }
        if (password.length < 6) {
          alert('Пароль повинен містити щонайменше 6 символів');
          setIsLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          alert('Паролі не співпадають!');
          setIsLoading(false);
          return;
        }

        const checkResponse = await fetch(`${API_BASE_URL}/check-email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        const checkData = await checkResponse.json();
        if (checkData.exists) {
          if (checkData.verified) {
            alert('Цей email вже зареєстрований. Будь ласка, увійдіть або використайте інший email.');
          } else {
            alert('Цей email вже зареєстрований, але не підтверджений. Будь ласка, перевірте свою пошту для коду підтвердження.');
          }
          setIsLoading(false);
          return;
        }

        const response = await fetch(`${API_BASE_URL}/send-verification-code`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (response.ok) {
          setShowEmailConfirmation(true);
          setResendDisabled(true);
          setResendTimeout(60);
        } else {
          alert(data.error || 'Помилка при відправці коду підтвердження');
        }
      }
    } catch (error) {
      console.error('Помилка запиту:', error);
      alert('Сервер недоступний. Спробуйте пізніше.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert('Будь ласка, введіть email');
      return;
    }

    setIsLoading(true);
    try {
      // Запит на відправку коду скидання пароля
      const response = await fetch(`${API_BASE_URL}/request-password-reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setPasswordResetSent(true);
        setResendDisabled(true);
        setResendTimeout(60);
        if (data.devCode) {
          console.log('Код скидання пароля (для розробки):', data.devCode);
        }
      } else {
        alert(data.error || 'Помилка при відправці коду скидання пароля');
      }
    } catch (error) {
      console.error('Помилка запиту:', error);
      alert('Сервер недоступний. Спробуйте пізніше.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyResetCode = async () => {
    if (!confirmationCode) {
      alert('Будь ласка, введіть код підтвердження');
      return;
    }

    setIsLoading(true);
    try {
      // Перевірка коду скидання пароля
      const response = await fetch(`${API_BASE_URL}/verify-password-reset-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          code: confirmationCode 
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setCodeVerified(true);
        alert('Код успішно підтверджено. Тепер ви можете встановити новий пароль.');
      } else {
        alert(data.error || 'Невірний код підтвердження');
      }
    } catch (error) {
      console.error('Помилка запиту:', error);
      alert('Сервер недоступний. Спробуйте пізніше.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendResetCode = async () => {
    if (!email) {
      alert('Будь ласка, введіть email');
      return;
    }

    setIsLoading(true);
    try {
      // Запит на повторну відправку коду
      const response = await fetch(`${API_BASE_URL}/resend-password-reset-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setResendDisabled(true);
        setResendTimeout(60);
        if (data.devCode) {
          console.log('Новий код скидання пароля (для розробки):', data.devCode);
        }
        alert(data.message || 'Новий код скидання пароля відправлено на ваш email');
      } else {
        alert(data.error || 'Помилка при повторній відправці коду');
      }
    } catch (error) {
      console.error('Помилка запиту:', error);
      alert('Сервер недоступний. Спробуйте пізніше.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!codeVerified) {
      alert('Будь ласка, спочатку підтвердіть код скидання пароля');
      return;
    }

    if (newPassword.length < 6) {
      alert('Пароль повинен містити щонайменше 6 символів');
      return;
    }

    if (newPassword !== newConfirmPassword) {
      alert('Паролі не співпадають!');
      return;
    }

    setIsLoading(true);
    try {
      // Встановлення нового пароля
      const res = await fetch(`${API_BASE_URL}/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          newPassword 
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Пароль успішно змінено! Тепер ви можете увійти з новим паролем.');
        setShowForgotPassword(false);
        setPasswordResetSent(false);
        setCodeVerified(false);
        setConfirmationCode('');
        setNewPassword('');
        setNewConfirmPassword('');
      } else {
        alert(data.error || 'Помилка зміни пароля');
      }
    } catch (error) {
      console.error('Помилка запиту:', error);
      alert('Сервер недоступний або сталась помилка.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/resend-verification-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setResendDisabled(true);
        setResendTimeout(60);
        if (data.devCode) {
          console.log('Новий код підтвердження (для розробки):', data.devCode);
        }
      } else {
        alert(data.error || 'Помилка при відправці коду підтвердження');
      }
    } catch (error) {
      console.error('Помилка запиту:', error);
      alert('Сервер недоступний. Спробуйте пізніше.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmEmail = async () => {
    if (!confirmationCode) {
      alert('Будь ласка, введіть код підтвердження');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ 
          name, 
          email, 
          password, 
          code: confirmationCode 
        }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.removeItem('testCompleted');
        navigate('/tests');
      } else {
        alert(data.error || 'Помилка реєстрації');
      }
    } catch (error) {
      console.error('Помилка запиту:', error);
      alert('Сервер недоступний або сталась помилка.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToRegistration = () => {
    setShowEmailConfirmation(false);
    setConfirmationCode('');
  };

  return (
    <div className="auth-container">
      {isLoading ? (
        <div className="loading-mini">
          <div className="loading-spinner"></div>
        </div>
      ) : showEmailConfirmation ? (
        <div className="auth-mini">
          <h3>Підтвердження Email</h3>
          <p className="email-notice">Код надіслано на {email}</p>

          <div className="form-mini">
            <input
              type="text"
              placeholder="Код підтвердження"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
            <button onClick={handleConfirmEmail} className="primary-btn">
              Підтвердити
            </button>
            <button 
              onClick={handleResendCode} 
              disabled={resendDisabled}
              className="secondary-btn"
            >
              {resendDisabled ? `Повторити (${resendTimeout})` : 'Надіслати код'}
            </button>
            <button 
              onClick={handleBackToRegistration}
              className="text-btn"
            >
              ← Назад
            </button>
          </div>
        </div>
      ) : showForgotPassword ? (
        <div className="auth-mini">
          {!passwordResetSent ? (
            <>
              <h3>Забули пароль?</h3>
              <p>Введіть email вашого акаунта для скидання пароля</p>
              <div className="form-mini">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleForgotPassword} className="primary-btn">
                  Надіслати код
                </button>
                <button 
                  onClick={() => setShowForgotPassword(false)}
                  className="text-btn"
                >
                  ← Назад до входу
                </button>
              </div>
            </>
          ) : !codeVerified ? (
            <>
              <h3>Підтвердження коду</h3>
              <p className="email-notice">Код надіслано на {email}</p>
              <div className="form-mini">
                <input
                  type="text"
                  placeholder="Код підтвердження"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                />
                <button onClick={handleVerifyResetCode} className="primary-btn">
                  Підтвердити код
                </button>
                <button 
                  onClick={handleResendResetCode} 
                  disabled={resendDisabled}
                  className="secondary-btn"
                >
                  {resendDisabled ? `Повторити (${resendTimeout})` : 'Надіслати код'}
                </button>
                <button 
                  onClick={() => {
                    setPasswordResetSent(false);
                    setConfirmationCode('');
                  }}
                  className="text-btn"
                >
                  ← Назад
                </button>
              </div>
            </>
          ) : (
            <>
              <h3>Встановити новий пароль</h3>
              <div className="form-mini">
                <input
                  type="password"
                  placeholder="Новий пароль"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Повторіть новий пароль"
                  value={newConfirmPassword}
                  onChange={(e) => setNewConfirmPassword(e.target.value)}
                />
                <button onClick={handleResetPassword} className="primary-btn">
                  Змінити пароль
                </button>
                <button 
                  onClick={() => {
                    setShowForgotPassword(false);
                    setPasswordResetSent(false);
                    setCodeVerified(false);
                  }}
                  className="text-btn"
                >
                  ← Скасувати
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="auth-mini">
          <h3>{isLogin ? 'Вхід' : 'Реєстрація'}</h3>

          <div className="form-mini">
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
                placeholder="Повтор пароля"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            <button onClick={handleSubmit} className="primary-btn">
              {isLogin ? 'Увійти' : 'Зареєструватись'}
            </button>
          </div>

          <div className="auth-switch">
            {isLogin ? (
              <>
                <span>Немає акаунта? <button onClick={() => setIsLogin(false)} className="link-btn">Створити</button></span>
                <button 
                  onClick={() => {
                    setShowForgotPassword(true);
                    setPasswordResetSent(false);
                    setCodeVerified(false);
                  }}
                  className="forgot-password-btn"
                >
                  Забули пароль?
                </button>
              </>
            ) : (
              <span>Є акаунт? <button onClick={() => setIsLogin(true)} className="link-btn">Увійти</button></span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartPage;