import '../index.css';
import '../endtest.css';
import { useState, useEffect } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import HelpPage from './HelpPage';
import SmartText from './SmartText';
import tasks from '../data/1805/Task';
import correctAnswers from '../data/1805/CorrectAnswers';
import React from 'react';
//https://latexeditor.lagrida.com/

type ScreenMode = 'test' | 'help' | 'confirmation' | 'completion';

const Test1805: React.FC = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [screenMode, setScreenMode] = useState<ScreenMode>('test');
  const [currentSelections, setCurrentSelections] = useState<(number | null)[]>(Array(tasks.length).fill(null));
  const [finalAnswers, setFinalAnswers] = useState<(number | (number | null)[] | null)[]>(Array(tasks.length).fill(null));
  const [matchingSelections, setMatchingSelections] = useState<(Array<number | null>)[]>(Array(tasks.length).fill(null).map(() => [null, null, null]));
  const [inputAnswers, setInputAnswers] = useState<string[]>(Array(tasks.length).fill(''));


  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }, [screenMode]);

  const isInputTask = (task: any) => task.type === 'input';

  const handleSelectVariant = (taskIndex: number, variantIndex: number) => {
    setCurrentSelections(prev => {
      const updated = [...prev];
      updated[taskIndex] = updated[taskIndex] === variantIndex ? null : variantIndex;

      setFinalAnswers(prevFinal => {
        const updatedFinal = [...prevFinal];
        updatedFinal[taskIndex] = null;
        return updatedFinal;
      });

      return updated;
    });
  };

  const handleMatchingButtonClick = (rowIdx: number, colIdx: number) => {
    setMatchingSelections(prev => {
      const updated = [...prev];
      const currentTaskMatch = [...updated[currentTaskIndex]];
      currentTaskMatch[rowIdx] = currentTaskMatch[rowIdx] === colIdx ? null : colIdx;
      updated[currentTaskIndex] = currentTaskMatch;

      setFinalAnswers(prevFinal => {
        const updatedFinal = [...prevFinal];
        updatedFinal[currentTaskIndex] = null;
        return updatedFinal;
      });

      return updated;
    });
  };

  const handleInputChange = (taskIndex: number, value: string) => {
    setInputAnswers(prev => {
      const updated = [...prev];
      updated[taskIndex] = value;
      return updated;
    });

    // Скидаємо збережену відповідь
    setFinalAnswers(prev => {
      const updated = [...prev];
      updated[taskIndex] = null;
      return updated;
    });
  };

  const handleSaveAnswer = () => {
    let updatedFinalAnswers = [...finalAnswers];
  
    if (currentTaskIndex >= 0 && currentTaskIndex <= 14) {
      const selected = currentSelections[currentTaskIndex];
      updatedFinalAnswers[currentTaskIndex] = selected !== undefined ? selected : null;
    } 
    else if (currentTaskIndex >= 15 && currentTaskIndex <= 17) {
      const selectedMatches = matchingSelections[currentTaskIndex];
      const processedMatches = selectedMatches.map(match => match !== null ? match : null);
      updatedFinalAnswers[currentTaskIndex] = processedMatches;
    } 
    else if (currentTaskIndex >= 18 && currentTaskIndex <= 21) {
      const input = inputAnswers[currentTaskIndex];
      updatedFinalAnswers[currentTaskIndex] = input.trim() !== '' ? Number(input) : null;
    }
  
    setFinalAnswers(updatedFinalAnswers);
  
    if (currentTaskIndex === tasks.length - 1) {
      setScreenMode('confirmation');
    } else {
      setTimeout(() => {
        setCurrentTaskIndex(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }
  };

  const handleFinishTest = () => {
    console.log('Результати користувача:', finalAnswers);
    setScreenMode('completion');
  };

  const getAnswerSummary = () => {
    let answered = 0;
    let correct = 0;

    finalAnswers.forEach((answer, index) => {
      const task = tasks[index];
      const isAnswered = task.type === 'matching' 
        ? Array.isArray(answer) && answer.some(item => item !== null)
        : answer !== null;

      if (isAnswered) {
        answered++;
        if (isAnswerCorrect(answer, index)) {
          correct++;
        }
      }
    });

    return { answered, correct, total: tasks.length };
  };

  const isAnswerCorrect = (userAnswer: any, taskIndex: number) => {
    if (!correctAnswers[taskIndex]) return false;
    
    const correctAnswer = correctAnswers[taskIndex];
    const task = tasks[taskIndex];

    if (task.type === 'matching') {
      if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) return false;
      return userAnswer.every((answer, idx) => answer === correctAnswer[idx]);
    } else if (task.type === 'input') {
      return Number(userAnswer) === Number(correctAnswer);
    } else {
      return userAnswer === correctAnswer;
    }
  };

  const formatAnswer = (answer: any, taskIndex: number) => {
    const task = tasks[taskIndex];
    
    if (task.type === 'matching') {
      if (Array.isArray(answer)) {
        return answer.map((match, idx) => 
          match !== null ? `${idx + 1} → ${['А', 'Б', 'В', 'Г', 'Д'][match]}` : `${idx + 1} → -`
        ).join(', ');
      }
      return 'Не відповів';
    } else if (task.type === 'input') {
      return answer !== null ? answer.toString() : 'Не відповів';
    } else {
      return answer !== null ? ['А', 'Б', 'В', 'Г', 'Д'][answer] : 'Не відповів';
    }
  };

  const currentTask = tasks[currentTaskIndex];
  const isMatchingType = currentTask && currentTask.type === 'matching';
  const isInputType = currentTask && isInputTask(currentTask);

  if (screenMode === 'confirmation') {
    const summary = getAnswerSummary();
    
    return (
      <MathJaxContext>
        <div className="confirmation-screen">
          <div className="confirmation-content">
            <h1>Підтвердження завершення тесту</h1>
            
            <div className="test-preview">
              <h3>Попередній огляд результатів:</h3>
              <p><strong>Відповіли:</strong> {summary.answered}/{summary.total}</p>
              <p><strong>Пропущено:</strong> {summary.total - summary.answered}</p>
            </div>

            <div className="warning-message">
              <p>⚠️ Після підтвердження ви не зможете змінити свої відповіді!</p>
              <p>Переконайтеся, що ви відповіли на всі потрібні завдання.</p>
            </div>

            <div className="confirmation-buttons">
              <button 
                onClick={() => setScreenMode('test')}
                className="back-button"
              >
                Повернутися до тесту
              </button>
              <button 
                onClick={handleFinishTest}
                className="finish-button"
              >
                Завершити тест
              </button>
            </div>
          </div>
        </div>
      </MathJaxContext>
    );
  }

  if (screenMode === 'completion') {
    const summary = getAnswerSummary();
    
    return (
      <MathJaxContext>
        <div className="completion-screen">
          <h1>Тест завершено!</h1>
          
          <div className="test-summary">
            <h2>Підсумок виконання:</h2>
            <p><strong>Відповіли:</strong> {summary.answered}/{summary.total}</p>
            <p><strong>Правильних відповідей:</strong> {summary.correct}/22</p>
            <p><strong>Відсоток правильних:</strong> {summary.answered > 0 ? Math.round((summary.correct / summary.answered) * 100) : 0}%</p>
          </div>

          <div className="detailed-results">
            <h3>Детальні результати:</h3>
            <div className="results-list">
              {finalAnswers.map((answer, index) => {
                const isCorrect = isAnswerCorrect(answer, index);
                return (
                  <div key={index} className={`result-item ${isCorrect ? 'correct' : ''}`}>
                    <span className="task-number">Завдання {index + 1}:</span>
                    <span className="answer-text">{formatAnswer(answer, index)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="completion-buttons">
            <button 
              onClick={() => window.location.href = '/'}
              className="back-to-menu-button"
            >
              Повернутися до вибору тестів
            </button>
          </div>
        </div>
      </MathJaxContext>
    );
  }

  return (
    <MathJaxContext>
      <div>
        {screenMode === 'test' ? (
          <>
            <div className="buttons-row">
              {tasks.map((task, taskIdx) => {
                const isCurrent = currentTaskIndex === taskIdx;
                const savedState = finalAnswers[taskIdx];
                const isMatching = task.type === 'matching';
                const isInput = task.type === 'input';

                let buttonClass = 'button-item';
                if (isCurrent) buttonClass += ' active';

                if (isMatching) {
                  if (Array.isArray(savedState)) {
                    const allSelected = savedState.every(item => item !== null);
                    const someSelected = savedState.some(item => item !== null);
                
                    if (allSelected) {
                      buttonClass += ' saved'; // всі вибрані
                    } else if (someSelected) {
                      buttonClass += ' partial'; // частково вибрані
                    }
                  }
                } else if (isInput) {
                  if (savedState !== null) {
                    buttonClass += ' saved';
                  }
                } else {
                  if (savedState !== null) {
                    buttonClass += ' saved';
                  }
                }

                return (
                  <button
                    key={taskIdx}
                    className={buttonClass}
                    onClick={() => setCurrentTaskIndex(taskIdx)}
                  >
                    {taskIdx + 1}
                  </button>
                );
              })}
            </div>

            <div className="button-content">
              <SmartText text={currentTask.text} className="main-text" />
              {currentTask.image && (
                <img src={currentTask.image} alt="Завдання" className="button-image" />
              )}
            </div>

            {/* Завдання */}
            {isMatchingType ? (
              <>
                <div className="matching-task">
                  {/* Сітка завдання */}
                  <div className="matching-grid">
                    <div className="left-column">
                      {currentTask.leftTitle && (
                        <div className="column-header">
                          <SmartText text={currentTask.leftTitle} />
                        </div>
                      )}
                      {currentTask.leftOptions?.map((option: any, idx: number) => (
                        <div key={idx} className="left-item">
                          <strong>{idx + 1}.</strong> <SmartText text={option.text} />
                        </div>
                      ))}
                    </div>

                    <div className="right-column">
                      {currentTask.rightTitle && (
                        <div className="column-header">
                          <SmartText text={currentTask.rightTitle} />
                        </div>
                      )}
                      {currentTask.variants?.map((variant: any, idx: number) => (
                        <div key={idx} className="variant-item">
                          <span className="variant-label">{['А', 'Б', 'В', 'Г', 'Д'][idx]}:</span>
                          <SmartText text={variant.text} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Кнопки відповідностей */}
                <div className="matching-button-grid">
                  <div className="header-row">
                    <div className="corner-cell" />
                    {['А', 'Б', 'В', 'Г', 'Д'].map((label, idx) => (
                      <div key={idx} className="column-label">{label}</div>
                    ))}
                  </div>

                  {[0, 1, 2].map(rowIdx => (
                    <div key={rowIdx} className="matching-row">
                      <div className="row-label">{rowIdx + 1}</div>
                      {[0, 1, 2, 3, 4].map(colIdx => {
                        const isActive = matchingSelections[currentTaskIndex][rowIdx] === colIdx;
                        return (
                          <button
                            key={colIdx}
                            className={`matching-button ${isActive ? 'active' : ''}`}
                            onClick={() => handleMatchingButtonClick(rowIdx, colIdx)}
                          >
                            {['А', 'Б', 'В', 'Г', 'Д'][colIdx]}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </>
            ) : isInputType ? (
              <>
                <div className="input-answer">
                  <input
                    type="text"
                    value={inputAnswers[currentTaskIndex]}
                    onChange={(e) => handleInputChange(currentTaskIndex, e.target.value)}
                    placeholder="Введіть відповідь"
                    className="input-field"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="variant-list">
                  {currentTask.variants?.map((variant: any, idx: number) => (
                    <div key={idx} className="variant-item">
                      <span className="variant-label">{['А', 'Б', 'В', 'Г', 'Д'][idx]}:</span>
                      <SmartText text={variant.text} />
                      {'image' in variant && variant.image && (
                        <img src={variant.image} alt={`Варіант ${idx + 1}`} className="variant-image" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="variant-buttons">
                  {['А', 'Б', 'В', 'Г', 'Д'].map((label, idx) => (
                    <button
                      key={idx}
                      className={`variant-button ${currentSelections[currentTaskIndex] === idx ? 'active' : ''}`}
                      onClick={() => handleSelectVariant(currentTaskIndex, idx)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="save-button">
              <button
                onClick={handleSaveAnswer}
                className={`save-task-button ${currentTaskIndex === tasks.length - 1 ? 'finish-button' : ''}`}
                style={currentTaskIndex === tasks.length - 1 ? { backgroundColor: 'red', color: 'white' } : {}}
              >
                {currentTaskIndex === tasks.length - 1
                  ? 'Завершити тест'
                  : (
                    (() => {
                      if (currentTask.type === 'matching') {
                        const selection = matchingSelections[currentTaskIndex];
                        const hasAnySelection = selection.some(item => item !== null);
                        return hasAnySelection ? 'Зберегти' : 'Пропустити';
                      } else if (currentTask.type === 'input') {
                        const input = inputAnswers[currentTaskIndex];
                        return input.trim() !== '' ? 'Зберегти' : 'Пропустити';
                      } else {
                        const selection = currentSelections[currentTaskIndex];
                        return selection !== null ? 'Зберегти' : 'Пропустити';
                      }
                    })()
                  )
                }
              </button>
            </div>

            {/* Модальне вікно підтвердження видалено - тепер окрема стадія */}

            <button onClick={() => setScreenMode('help')} className="help-button">
              Довідка
            </button>
          </>
        ) : (
          <HelpPage onBack={() => setScreenMode('test')} />
        )}
      </div>
    </MathJaxContext>
  );
};

export default Test1805;