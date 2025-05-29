import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectTest = async (testId: number, stringId: string) => {
    try {
      // Спочатку отримуємо профіль користувача, щоб дізнатися user_id
      const profileResponse = await fetch('http://localhost:5414/profile', {
        method: 'GET',
        credentials: 'include',
      });

      if (!profileResponse.ok) {
        console.error('Помилка при отриманні профілю користувача');
        navigate('/');
        return;
      }

      const userProfile = await profileResponse.json();
      const userId = userProfile.id;

      // Відправляємо запит на створення тесту з числовим ID
      const response = await fetch('http://localhost:5414/test/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          user_id: userId,
          test_id: testId, // числовий ID
          status: 1
        })
      });

      if (!response.ok) {
        throw new Error('Помилка при створенні тесту');
      }

      const data = await response.json();
      console.log('Тест створено:', data);

      // Після успішного створення тесту переходимо на сторінку тесту за строковим ID
      switch (stringId) {
        case 'Test1805':
          navigate('/test/math');
          break;
        case 'Test2024':
          navigate('/test/math');
          break;
        case 'BasicTest':
          navigate('/test/math');
          break;
        default:
          navigate('/test/math');
      }
    } catch (error) {
      console.error('Помилка:', error);
      // Можете показати повідомлення про помилку користувачу
      alert('Помилка при створенні тесту. Спробуйте ще раз.');
    }
  };

  const tests = [
    {
      id: 1, // числовий ID для бази даних
      stringId: 'Test1805', // строковий ID для роутингу
      name: 'Тест 18.05.2024',
      description: 'Основний тест знань з історії',
      difficulty: 'easy',
      difficultyText: 'Легкий',
      questions: 22,
      time: '60 хв'
    },
    {
      id: 2,
      stringId: 'Test2024',
      name: 'Тест 2024',
      description: 'Сучасні знання та технології',
      difficulty: 'hard',
      difficultyText: 'Складний',
      questions: 30,
      time: '45 хв'
    },
    {
      id: 3,
      stringId: 'BasicTest',
      name: 'Базовий тест',
      description: 'Простий тест для початківців',
      difficulty: 'medium',
      difficultyText: 'Середній',
      questions: 15,
      time: '20 хв'
    }
  ];

  return (
    <div className="test-selection">
      <div className="test-selection-container">
        <div className="test-selection-header">
          <h1 className="test-selection-title">Оберіть тест</h1>
          <p className="test-selection-subtitle">
            Виберіть один з доступних тестів для перевірки ваших знань
          </p>
        </div>

        <div className="tests-list">
          {tests.map((test) => (
            <div
              key={test.id}
              className="test-card"
              onClick={() => handleSelectTest(test.id, test.stringId)}
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
};

export default TestSelection;