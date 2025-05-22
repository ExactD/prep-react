import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectTest = (testId: string) => {
    switch (testId) {
      case 'Test1805':
        navigate('/test/1805');
        break;
      case 'Test2024':
        navigate('/test/2024');
        break;
      case 'BasicTest':
        navigate('/test/basic');
        break;
      default:
        navigate('/test/1805');
    }
  };

  const tests = [
    {
      id: 'Test1805',
      name: 'Тест 18.05.2024',
      description: 'Основний тест знань з історії',
      difficulty: 'easy',
      difficultyText: 'Легкий',
      questions: 22,
      time: '60 хв'
    },
    {
      id: 'Test2024',
      name: 'Тест 2024',
      description: 'Сучасні знання та технології',
      difficulty: 'hard',
      difficultyText: 'Складний',
      questions: 30,
      time: '45 хв'
    },
    {
      id: 'BasicTest',
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
              onClick={() => handleSelectTest(test.id)}
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