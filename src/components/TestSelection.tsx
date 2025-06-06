import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../selecttest.css';
import '../profile.css';
import '../confirmation.css';
import API_BASE_URL from '../API-BASE-URL';

interface ActiveTest {
  id: number;
  test_id: number;
  test_name: string;
  progress: number;
  total_questions: number;
  time_remaining?: string;
}

interface UserProfile {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

interface UserTest {
  id: number;
  user_id: number;
  test_id: number;
  status: number;
  score?: number;
  started_at: string;
  completed_at?: string;
}

interface Test {
  id: number;
  stringId: string;
  name: string;
  description: string;
  difficulty: string;
  difficultyText: string;
  questions: number;
  time: string;
}

const useCustomBackNavigation = (
  showProfile: boolean,
  showTestConfirmation: boolean,
  setShowProfile: (value: boolean) => void,
  setShowTestConfirmation: (value: boolean) => void
) => {
  useEffect(() => {
    const handlePopState = () => {
      if (showTestConfirmation) {
        setShowTestConfirmation(false);
      } else if (showProfile) {
        setShowProfile(false);
      }
      // Забороняємо реальну навігацію браузера
      window.history.pushState(null, '', window.location.href);
    };

    // Додаємо стан в історію при зміні вкладок
    if (showProfile || showTestConfirmation) {
      window.history.pushState({ customNav: true }, '', window.location.href);
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [showProfile, showTestConfirmation, setShowProfile, setShowTestConfirmation]);
};


const TestSelection: React.FC = () => {
  const navigate = useNavigate();
  const [activeTest, setActiveTest] = useState<ActiveTest | null>(null);
  const [loading, setLoading] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [showTestConfirmation, setShowTestConfirmation] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userTests, setUserTests] = useState<UserTest[]>([]);
  const [profileLoading, setProfileLoading] = useState(false);
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);

  // Додаємо хук
  useCustomBackNavigation(
    showProfile,
    showTestConfirmation,
    setShowProfile,
    setShowTestConfirmation
  );

  const tests = useMemo(() => [
    {
      id: 1,
      stringId: 'Test1805',
      name: 'НМТ 18.05.2024 (1 сесія)',
      description: 'Тест основної сесії з математики',
      difficulty: 'medium',
      difficultyText: 'Середній',
      questions: 22,
      time: '60 хв'
    },
    {
      id: 2,
      stringId: 'Test2505',
      name: 'НМТ 25.05.2024 (2 сесія)',
      description: 'Тест основної сесії з математики',
      difficulty: 'medium',
      difficultyText: 'Середній',
      questions: 22,
      time: '60 хв'
    },
    {
      id: 3,
      stringId: 'Test0106',
      name: 'НМТ 01.06.2024 (3 сесія)',
      description: 'Тест основної сесії з математики',
      difficulty: 'medium',
      difficultyText: 'Середній',
      questions: 22,
      time: '60 хв'
    },
    {
      id: 4,
      stringId: 'Test0306',
      name: 'НМТ 03.06.2024 (4 сесія)',
      description: 'Тест основної сесії з математики',
      difficulty: 'easy',
      difficultyText: 'Легкий',
      questions: 22,
      time: '60 хв'
    },
    {
      id: 5,
      stringId: 'Test0406',
      name: 'НМТ 04.06.2024 (5 сесія)',
      description: 'Тест основної сесії з математики',
      difficulty: 'easy',
      difficultyText: 'Легкий',
      questions: 22,
      time: '60 хв'
    },
    {
      id: 6,
      stringId: 'Test0506',
      name: 'НМТ 05.06.2024 (6 сесія)',
      description: 'Тест основної сесії з математики',
      difficulty: 'easy',
      difficultyText: 'Легкий',
      questions: 22,
      time: '60 хв'
    }
  ], []);

  const getTestInfoById = useCallback((testId: number) => {
    return tests.find(test => test.id === testId);
  }, [tests]);

  const fetchUserProfile = useCallback(async () => {
    setProfileLoading(true);
    const token = localStorage.getItem("token");
    try {
      const profileResponse = await fetch(`${API_BASE_URL}/profile`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Додаємо Content-Type
        },
      });

      if (!profileResponse.ok) {
        throw new Error(`Помилка профілю: ${profileResponse.status}`);
      }

      const profile = await profileResponse.json();
      setUserProfile(profile);
      
      const testsResponse = await fetch(`${API_BASE_URL}/test/all`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Додаємо Content-Type
        },
        body: JSON.stringify({ user_id: profile.id }),
        credentials: 'include',
      });

      if (!testsResponse.ok) {
        throw new Error(`Помилка тестів: ${testsResponse.status}`);
      }

      const testsData = await testsResponse.json();
      setUserTests(Array.isArray(testsData) ? testsData : []);
    } catch (error) {
      console.error('Помилка при отриманні даних:', error);
      setUserTests([]);
    } finally {
      setProfileLoading(false);
    }
  }, []);

  const checkForActiveTest = useCallback(async () => {
    const token = localStorage.getItem("token");
    try {
      const profileResponse = await fetch(`${API_BASE_URL}/profile`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Додаємо Content-Type
        },
      });
      
      if (!profileResponse.ok) return;
      
      const profile = await profileResponse.json();
      const response = await fetch(`${API_BASE_URL}/test/get`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Додаємо Content-Type
        },
        body: JSON.stringify({ user_id: profile.id }),
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        if (data.test_id) {
          const testInfo = getTestInfoById(data.test_id);
          if (testInfo) {
            setActiveTest({
              id: data.id || 0,
              test_id: data.test_id,
              test_name: testInfo.name,
              progress: data.progress || 0,
              total_questions: testInfo.questions,
              time_remaining: data.time_remaining
            });
          }
        }
      }
    } catch (error) {
      console.error('Помилка при перевірці активного тесту:', error);
    } finally {
      setLoading(false);
    }
  }, [getTestInfoById]);

  const handleShowProfile = useCallback(() => {
    setShowProfile(true);
    fetchUserProfile();
  }, [fetchUserProfile]);

  const handleBackToTests = useCallback(() => {
    setShowProfile(false);
  }, []);

  const handleBackFromConfirmation = useCallback(() => {
    setShowTestConfirmation(false);
    setSelectedTest(null);
  }, []);

  const formatDate = useCallback((dateString: string) => {
    try {
      if (/^\d{2}:\d{2}:\d{2}/.test(dateString)) {
        const today = new Date().toISOString().split('T')[0];
        return `${today} ${dateString.split('.')[0]}`;
      }
      
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      
      return date.toLocaleString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Kyiv'
      });
    } catch (error) {
      return dateString;
    }
  }, []);

  const getTestStatus = useCallback((status: number) => {
    switch (status) {
      case 1: return { text: 'Незавершений', class: 'status-incomplete' };
      case 2: return { text: 'Завершений', class: 'status-completed' };
      default: return { text: 'Невідомо', class: 'status-unknown' };
    }
  }, []);

  useEffect(() => {
    checkForActiveTest();
  }, [checkForActiveTest]);

  const handleResumeTest = useCallback(() => {
    if (!activeTest) return;
    navigate('/test/math');
  }, [activeTest, navigate]);

  const handleSelectTestClick = useCallback((testId: number) => {
    const test = tests.find(t => t.id === testId);
    if (test) {
      setSelectedTest(test);
      setShowTestConfirmation(true);
    }
  }, [tests]);

  const handleConfirmTestStart = useCallback(async () => {
    if (!selectedTest) return;
    const token = localStorage.getItem("token");

    try {
      const profileResponse = await fetch(`${API_BASE_URL}/profile`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Додаємо Content-Type
        },
      });

      if (!profileResponse.ok) {
        navigate('/');
        return;
      }

      const userProfile = await profileResponse.json();
      const userId = userProfile.id;

      const activeTestResponse = await fetch(`${API_BASE_URL}/test/get`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Додаємо Content-Type
        },
        body: JSON.stringify({ user_id: userId }),
        credentials: 'include',
      });

      if (activeTestResponse.ok) {
        const activeTestData = await activeTestResponse.json();
        if (activeTestData.test_id && activeTestData.status === 1) {
          alert('Ви вже маєте активний тест. Завершіть його перед початком нового.');
          setShowTestConfirmation(false);
          return;
        }
      }

      const createResponse = await fetch(`${API_BASE_URL}/test/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Додаємо Content-Type
        },
        credentials: 'include',
        body: JSON.stringify({
          user_id: userId,
          test_id: selectedTest.id,
          status: 1
        })
      });

      const deleteProgress = await fetch(`${API_BASE_URL}/progress/delete`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Додаємо Content-Type
        },
        credentials: 'include',
        body: JSON.stringify({
          user_id: userId,
        })
      });

      if (!createResponse.ok) {
        throw new Error('Помилка при створенні тесту');
      }

      if (!deleteProgress.ok) {
        throw new Error('Помилка в видалені прогресу');
      }

      navigate('/test/math');
    } catch (error) {
      console.error('Помилка:', error);
      alert('Помилка при роботі з тестом. Спробуйте ще раз.');
    } finally {
      setShowTestConfirmation(false);
    }
  }, [selectedTest, navigate]);

  const renderProfileView = () => (
    <div className="test-selection">
      <div className="test-selection-container">
        <div className="profile-header">
          <button className="back-button-profile" onClick={handleBackToTests}>
            ← Назад до тестів
          </button>
          <h1 className="profile-title">Профіль користувача</h1>
        </div>

        {profileLoading ? (
          <div className="profile-loading">
            <p>Завантаження профілю...</p>
          </div>
        ) : (
          <>
            {userProfile && (
              <div className="profile-info">
                <div className="profile-field">
                  <strong>ID:</strong> {userProfile.id}
                </div>
                <div className="profile-field">
                  <strong>Ім'я:</strong> {userProfile.name}
                </div>
                <div className="profile-field">
                  <strong>Email:</strong> {userProfile.email}
                </div>
                <div className="profile-field">
                  <strong>Дата реєстрації:</strong> {formatDate(userProfile.created_at)}
                </div>
              </div>
            )}

            <div className="user-tests-section">
              <h2 className="tests-history-title">Історія тестів</h2>
              {userTests.length === 0 ? (
                <div className="no-tests">
                  <p>Ви ще не проходили жодного тесту</p>
                </div>
              ) : (
                <div className="user-tests-list">
                  {userTests.map((test) => {
                    const testInfo = getTestInfoById(test.test_id);
                    const status = getTestStatus(test.status);
                    const isCompleted = test.status === 2;
                    
                    return (
                      <div key={test.id} className={`user-test-card ${status.class}`}>
                        <div className="user-test-header">
                          <h3 className="user-test-name">
                            {testInfo?.name || `Тест #${test.test_id}`}
                          </h3>
                          <div className="user-test-status">
                            {status.text}
                            {isCompleted && test.score !== undefined && (
                              <span className="user-test-score">
                                {test.score} балів
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="user-test-details">
                          <div className="user-test-info">
                            <div className="user-test-date">
                              <strong>Почато:</strong> {formatDate(test.started_at)}
                            </div>
                            {test.completed_at && (
                              <div className="user-test-date">
                                <strong>Завершено:</strong> {formatDate(test.completed_at)}
                              </div>
                            )}
                            {testInfo && (
                              <div className="user-test-meta">
                                <span><strong>Питання:</strong> {testInfo.questions}</span>
                                <span><strong>Час:</strong> {testInfo.time}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );

  const renderTestConfirmation = () => (
    <div className="test-confirm-wrapper">
      <div className="test-confirm-box">
        <h1 className="confirm-main-title">Підтвердження тесту</h1>
        
        {selectedTest && (
          <div className="confirm-content">
            <h2 className="test-name-display">{selectedTest.name}</h2>
            <p className="test-descr-text">{selectedTest.description}</p>
            
            <div className="warning-message-confirm">
              Після підтвердження ви не зможете виконувати інші тести, не завершивши даний!
            </div>
            
            <div className="test-specs-center">
              <div className="spec-item">
                <span className="spec-label">Складність: </span>
                <span className={`spec-value difficulty-${selectedTest.difficulty}`}>
                  {selectedTest.difficultyText}
                </span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Кількість питань: </span>
                <span className="spec-value">{selectedTest.questions}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Час на проходження: </span>
                <span className="spec-value">{selectedTest.time}</span>
              </div>
            </div>

            <div className="confirm-buttons">
              <button 
                className="cancel-btn"
                onClick={handleBackFromConfirmation}
              >
                Скасувати
              </button>
              <button 
                className="confirm-btn"
                onClick={handleConfirmTestStart}
              >
                Почати тест
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderTestSelection = () => (
    <div className="test-selection">
      <div className="test-selection-container">
        <div className="test-selection-header">
          <div className="header-content">
            <div className="header-text">
              <h1 className="test-selection-title">Оберіть тест</h1>
              <p className="test-selection-subtitle">
                Виберіть один з доступних тестів для перевірки ваших знань
              </p>
            </div>
            <button 
              className="profile-button"
              onClick={handleShowProfile}
            >
              Профіль
            </button>
          </div>
        </div>

        {activeTest && (
          <div className="active-test-section">
            <h2 className="active-test-header">Незавершений тест</h2>
            <div 
              className="active-test-card"
              onClick={handleResumeTest}
            >
              <div className="active-test-icon">
                <span className="resume-icon"> 🖹 </span>
              </div>
              <div className="active-test-content">
                <div className="active-test-info">
                  <h3 className="active-test-name">{activeTest.test_name}</h3>
                  <p className="active-test-description">
                    Продовжити виконання тесту
                  </p>
                </div>
                <div className="active-test-progress">
                  <span className="progress-text">
                    Питань: {activeTest.total_questions}
                  </span>
                  {activeTest.time_remaining && (
                    <span className="time-remaining">
                      ⏱️ Час: {activeTest.time_remaining}
                    </span>
                  )}
                </div>
              </div>
              <div className="active-test-action">
                <span className="continue-text">Продовжити →</span>
              </div>
            </div>
          </div>
        )}

        <div className="tests-list">
          {tests.map((test) => (
            <div
              key={test.id}
              className="test-card"
              onClick={() => handleSelectTestClick(test.id)}
            >
              <div className="test-card-header">
                <h3 className="test-name">{test.name}</h3>
                <span className={`test-difficulty difficulty-${test.difficulty}`}>
                  {test.difficultyText}
                </span>
              </div>
              
              <p className="test-description">{test.description}</p>
              
              <div className="test-info">
                <span>📝 {test.questions} питань</span>
                <span>⏱️ {test.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="test-selection">
        <div className="test-selection-container">
          <p>Завантаження...</p>
        </div>
      </div>
    );
  }

  if (showProfile) return renderProfileView();
  if (showTestConfirmation) return renderTestConfirmation();
  return renderTestSelection();
};

export default TestSelection;