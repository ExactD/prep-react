import '../index.css';
import { useState, useEffect } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import HelpPage from './HelpPage';
import SmartText from './SmartText';
import tasks from '../data/1805/Task';
//https://latexeditor.lagrida.com/

type ScreenMode = 'test' | 'help';

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
      setTimeout(() => {
        console.log('Результати користувача:', updatedFinalAnswers);
      }, 0);
    } else {
      setTimeout(() => {
        setCurrentTaskIndex(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }
  };

  const currentTask = tasks[currentTaskIndex];
  const isMatchingType = currentTask.type === 'matching';
  const isInputType = isInputTask(currentTask);

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