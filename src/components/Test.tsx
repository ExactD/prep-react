import '../endtest.css';
import '../index.css';
import { useState, useEffect, useRef } from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import HelpPage from './HelpPage';
import SmartText from './SmartText';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../API-BASE-URL';
import { useTestId } from './TestIdContext';

type ScreenMode = 'test' | 'help' | 'confirmation' | 'completion' | 'review';

interface BackendResponse {
  message: string;
  records: {
    user_id: number;
    test_id: number;
    task: number; // індекс завдання (0-21)
    value: number | number[] | null; // значення завдання
  }[];
  count: number;
}

interface ErrorResponse {
  error: string;
  details?: string;
}

async function loadData(condition: any) {
  let tasks;
  
  if (condition === 1) {
    const module = await import('../data/1805/Task');
    tasks = module.default;
  } else if (condition === 2) {
    const module = await import('../data/2505/Task');
    tasks = module.default;
  } else if (condition === 3) {
    const module = await import('../data/0106/Task');
    tasks = module.default;
  } else if (condition === 4) {
    const module = await import('../data/0306/Task');
    tasks = module.default;
  } else if (condition === 5) {
    const module = await import('../data/0406/Task');
    tasks = module.default;
  } else if (condition === 6) {
    const module = await import('../data/0506/Task');
    tasks = module.default;
  } else if (condition === 7) {
    const module = await import('../data/0606/Task');
    tasks = module.default;
  } else if (condition === 8) {
    const module = await import('../data/0706/Task');
    tasks = module.default;
  } else if (condition === 9) {
    const module = await import('../data/1006/Task');
    tasks = module.default;
  } else if (condition === 10) {
    const module = await import('../data/1106/Task');
    tasks = module.default;
  } else if (condition === 11) {
    const module = await import('../data/1206/Task');
    tasks = module.default;
  } else if (condition === 12) {
    const module = await import('../data/1306/Task');
    tasks = module.default;
  } else if (condition === 13) {
    const module = await import('../data/1406/Task');
    tasks = module.default;
  } else if (condition === 14) {
    const module = await import('../data/1706/Task');
    tasks = module.default;
  } else if (condition === 15) {
    const module = await import('../data/1806/Task');
    tasks = module.default;
  } else if (condition === 16) {
    const module = await import('../data/1906/Task');
    tasks = module.default;
  } else if (condition === 17) {
    const module = await import('../data/2006/Task');
    tasks = module.default;
  } else if (condition === 18) {
    const module = await import('../data/2106/Task');
    tasks = module.default;
  }
  
  return tasks;
}

async function loadAnsware(condition: any) {
  let correctAnswers;
  
  if (condition === 1) {
    const module = await import('../data/1805/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 2) {
    const module = await import('../data/2505/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 3) {
    const module = await import('../data/0106/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 4) {
    const module = await import('../data/0306/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 5) {
    const module = await import('../data/0406/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 6) {
    const module = await import('../data/0506/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 7) {
    const module = await import('../data/0606/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 8) {
    const module = await import('../data/0706/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 9) {
    const module = await import('../data/1006/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 10) {
    const module = await import('../data/1106/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 11) {
    const module = await import('../data/1206/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 12) {
    const module = await import('../data/1306/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 13) {
    const module = await import('../data/1406/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 14) {
    const module = await import('../data/1706/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 15) {
    const module = await import('../data/1806/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 16) {
    const module = await import('../data/1906/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 17) {
    const module = await import('../data/2006/CorrectAnswers');
    correctAnswers = module.default;
  } else if (condition === 18) {
    const module = await import('../data/2106/CorrectAnswers');
    correctAnswers = module.default;
  }
  
  return correctAnswers;
}

const getTestID = async (userId: number, navigate: Function) => {
  const token = localStorage.getItem("token");
  if (token) {
    
  }
  try {
    const res = await fetch(`${API_BASE_URL}/test/get`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Додаємо Content-Type
      },
      body: JSON.stringify({ user_id: userId }),
      credentials: 'include',
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Error details:', errorData);
      localStorage.removeItem('testCompleted');
      navigate('/tests'); // Перенаправляємо на попередню сторінку
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log('Received data:', data);

    if (!data.test_id) {
      throw new Error('test_id not found in response');
    }

    return data.test_id;
  } catch (error) {
    throw error;
  }
};

const Test: React.FC = () => {
  const [correctAnswers, setCorrectAnswers] = useState<any[]>([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [screenMode, setScreenMode] = useState<ScreenMode>('test');
  const [currentSelections, setCurrentSelections] = useState<(number | null)[]>(Array(22).fill(null));
  const [finalAnswers, setFinalAnswers] = useState<(number | (number | null)[] | null)[]>(Array(22).fill(null));
  const [matchingSelections, setMatchingSelections] = useState<(number | null)[][]>(
    Array(3).fill(null).map(() => Array(3).fill(null))
  );
  const [inputAnswers, setInputAnswers] = useState<string[]>(Array(22).fill(''));
  const [userProfile, setUserProfile] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewTaskIndex, setReviewTaskIndex] = useState<number | null>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number>(3599);
  const [isTimerVisible, setIsTimerVisible] = useState(true);
  const { testId1 } = useTestId();
  const [isZoomReset, setIsZoomReset] = useState(false);

  // Додаємо useRef для відстеження, чи вже був викликаний saveAndDisplayAnswers
  const hasLoadedAnswers = useRef(false);

  const resetTimer = () => {
    setTimeLeft(3599); // 1 година = 3600 секунд, починаємо з 3599 (59:59)
    localStorage.setItem('testTimer', '3599');
  };

  const resetZoom = () => {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
      setIsZoomReset(true);
      
      // Після невеликої затримки повертаємо можливість масштабування
      setTimeout(() => {
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
        setIsZoomReset(false);
      }, 300);
    }
  };

  // Викликати resetZoom при зміні screenMode
  useEffect(() => {
    resetZoom();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }, [screenMode]);

  // Завантаження завдань при ініціалізації компонента
    // Modify the useEffect hook that initializes tasks
  useEffect(() => {
    const initializeTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          // Wait for userProfile to be loaded if token exists
          if (!userProfile) {
            console.log('Waiting for user profile to load...');
            return;
          }
          
          const testId = await getTestID(userProfile.id, navigate);
          const loadedTasks = await loadData(testId);
          const loadedCorrectAnswers = await loadAnsware(testId);

          if (loadedTasks) {
            setTasks(loadedTasks);
            setCorrectAnswers(loadedCorrectAnswers || []);
            setCurrentSelections(Array(loadedTasks.length).fill(null));
            setFinalAnswers(Array(loadedTasks.length).fill(null));
            setMatchingSelections(Array(loadedTasks.length).fill(null).map(() => [null, null, null]));
            setInputAnswers(Array(loadedTasks.length).fill(''));
          }
        } else {
          const loadedTasks = await loadData(testId1);
          const loadedCorrectAnswers = await loadAnsware(testId1);
          if (loadedTasks) {
            setTasks(loadedTasks);
            setCorrectAnswers(loadedCorrectAnswers || []);
            setCurrentSelections(Array(loadedTasks.length).fill(null));
            setFinalAnswers(Array(loadedTasks.length).fill(null));
            setMatchingSelections(Array(loadedTasks.length).fill(null).map(() => [null, null, null]));
            setInputAnswers(Array(loadedTasks.length).fill(''));
          }
          if (testId1 === null) {
            localStorage.removeItem('testCompleted');
            navigate('/tests');
          }
        }
        resetTimer();
      } catch (error) {
        console.error('Помилка завантаження tasks:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeTasks();
  }, [userProfile, testId1, navigate]); // Add dependencies here

  // Отримання профілю користувача при завантаженні компонента
  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await fetch(`${API_BASE_URL}/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Додаємо Content-Type
          },
          credentials: 'include',
        });

          if (res.ok) {
            const profile = await res.json();
            setUserProfile(profile);
          } else {
            console.error('Помилка при отриманні профілю користувача');
          }
        } catch (error) {
          console.error('Помилка при отриманні профілю:', error);
        }
      } else {
        console.warn('Розпочате тест для незареєстрованого користувача');
      }
    };

    fetchUserProfile();
  }, []);

  // Ефект для завантаження відповідей користувача
  useEffect(() => {
    if (!isLoading && tasks.length > 0 && userProfile?.id && !hasLoadedAnswers.current) {
      const loadUserAnswers = async () => {
        try {
          const answers = await getUserTestData(userProfile.id);
          await saveAndDisplayAnswers(answers);
          hasLoadedAnswers.current = true;
        } catch (error) {
          console.error('Помилка при завантаженні відповідей:', error);
          alert('Помилка при завантаженні відповідей. Перезагрузіть сторінку!');
        }
      };

      loadUserAnswers();
    }
  }, [isLoading, tasks, userProfile]); // Залежності ефекту

  useEffect(() => {
    // Спроба отримати збережений час
    const savedTime = localStorage.getItem('testTimer');
    const initialTime = savedTime ? parseInt(savedTime, 10) : 3599;
    setTimeLeft(initialTime);

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev > 0 ? prev - 1 : 0;
        localStorage.setItem('testTimer', newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      // Не видаляємо timer з localStorage тут, щоб зберегти між перезавантаженнями
    };
  }, []);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Показуємо індикатор завантаження поки tasks не завантажені
  if (isLoading || tasks.length === 0) {
    return (
      <div className="loading-screen">
        <p>Завантаження завдань...</p>
      </div>
    );
  }

  if (isLoading || tasks.length === 0) {
    return (
      <div className="loading-screen">
        <p>Завантаження завдань...</p>
      </div>
    );
  }

  const isInputTask = (task: any) => task.type === 'input';
    const handleTaskClick = (taskIndex: number) => {
    setReviewTaskIndex(taskIndex);
    setScreenMode('review');
  };

  const saveAndDisplayAnswers = async (answersArray: (number | number[] | null)[]) => {
    if (!userProfile?.id) {
      console.error('User profile not loaded, cannot save answers');
      return;
    }

    try {
      // 1. Ініціалізація станів з правильними розмірами
      const tasksCount = tasks.length;
      
      // 2. Створення нових станів на основі поточних
      const newCurrentSelections = currentSelections ? [...currentSelections] : Array(tasksCount).fill(null);
      const newFinalAnswers = finalAnswers ? [...finalAnswers] : Array(tasksCount).fill(null);
      const newInputAnswers = inputAnswers ? [...inputAnswers] : Array(tasksCount).fill('');
      
      // 3. Ініціалізуємо matchingSelections для всіх завдань на відповідність
      const newMatchingSelections = [...matchingSelections];
      
      // Знаходимо всі завдання на відповідність та ініціалізуємо їх
      tasks.forEach((task, index) => {
        if (task.type === 'matching') {
          if (!newMatchingSelections[index]) {
            newMatchingSelections[index] = Array(3).fill(null);
          }
        }
      });

      // 4. Безпечна обробка відповідей
      answersArray.forEach((answer, taskIndex) => {
        try {
          if (answer === null || answer === undefined) return;
          if (taskIndex >= tasksCount) return; // Захист від виходу за межі

          const currentTask = tasks[taskIndex];
          if (!currentTask) return;

          // Завдання на відповідність
          if (currentTask.type === 'matching') {
            if (!newMatchingSelections[taskIndex]) {
              newMatchingSelections[taskIndex] = Array(3).fill(null);
            }

            if (Array.isArray(answer)) {
              // Нормалізуємо значення (переконуємось, що це числа або null)
              newMatchingSelections[taskIndex] = answer.map(val => 
                val !== null && val !== undefined ? Number(val) : null
              ).slice(0, 3); // Обмежуємо до 3 елементів
              
              newFinalAnswers[taskIndex] = [...newMatchingSelections[taskIndex]];
            }
          }
          // Текстові відповіді (input завдання)
          else if (currentTask.type === 'input') {
            newInputAnswers[taskIndex] = String(answer ?? '');
            newFinalAnswers[taskIndex] = Number(answer) || null;
          }
          // Звичайні питання (single choice)
          else {
            newCurrentSelections[taskIndex] = Number(answer) || null;
            newFinalAnswers[taskIndex] = Number(answer) || null;
          }
        } catch (error) {
          console.error(`Error processing task ${taskIndex}:`, error);
        }
      });

      // 5. Оновлення станів
      setCurrentSelections(newCurrentSelections);
      setFinalAnswers(newFinalAnswers);
      setMatchingSelections(newMatchingSelections);
      setInputAnswers(newInputAnswers);

      // 6. НОВА ЛОГІКА: Знаходимо перше невиконане завдання або переходимо на останнє
      const findFirstIncompleteTask = () => {
        for (let i = 0; i < tasksCount; i++) {
          const task = tasks[i];
          const answer = newFinalAnswers[i];
          
          // Перевіряємо чи завдання виконане
          let isCompleted = false;
          
          if (task.type === 'matching') {
            // Завдання на відповідність вважається виконаним, якщо є хоча б одна відповідь
            isCompleted = Array.isArray(answer) && answer.some(item => item !== null);
          } else if (task.type === 'input') {
            // Input завдання вважається виконаним, якщо є непорожнє значення
            isCompleted = answer !== null && answer !== undefined && String(answer).trim() !== '';
          } else {
            // Звичайні завдання вважаються виконаними, якщо є вибір
            isCompleted = answer !== null && answer !== undefined;
          }
          
          if (!isCompleted) {
            return i; // Повертаємо індекс першого невиконаного завдання
          }
        }
        
        // Якщо всі завдання виконані, повертаємо останнє завдання
        return tasksCount - 1;
      };

      // 7. Встановлюємо поточний індекс завдання
      const targetTaskIndex = findFirstIncompleteTask();
      setCurrentTaskIndex(targetTaskIndex);

      console.log('Successfully loaded answers:', {
        currentSelections: newCurrentSelections,
        matchingSelections: newMatchingSelections,
        inputAnswers: newInputAnswers,
        tasksTypes: tasks.map(t => t.type),
        targetTaskIndex: targetTaskIndex,
        taskInfo: `Перехід на завдання ${targetTaskIndex + 1}`
      });

      // 8. Опціонально: прокручуємо до верху після встановлення завдання
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);

    } catch (error) {
      console.error('Failed to load answers:', error);
    }
  };

  async function getUserTestData(userId: number): Promise<(number | number[] | null)[]> {
    const token = localStorage.getItem("token");
    try {
      // Запит до бекенду для отримання даних
      const response = await fetch(`${API_BASE_URL}/progress/get`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Додаємо Content-Type
        },
        credentials: 'include',
        body: JSON.stringify({
          user_id: userId
        })
      });

      if (!response.ok) {
        const errorData: ErrorResponse = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data: BackendResponse = await response.json();
      
      // Якщо записів немає, повертаємо масив з null
      if (!data.records || data.records.length === 0) {
        return Array(tasks.length).fill(null);
      }

      // Створюємо порожній масив на кількість завдань
      const resultArray: (number | number[] | null)[] = Array(tasks.length).fill(null);
      
      // Ініціалізуємо масиви для завдань на відповідність
      tasks.forEach((task, index) => {
        if (task.type === 'matching') {
          resultArray[index] = Array(3).fill(null);
        }
      });
      
      // Обробляємо кожен запис з бази даних
      data.records.forEach(record => {
        const taskId = record.task.toString();
        const value = Number(record.value);
        
        // Check if taskId contains a dot (for matching questions)
        if (taskId.indexOf('.') > -1) {
          // Matching questions (e.g., "16.1")
          const parts = taskId.split('.');
          const mainTask = parseInt(parts[0], 10);
          const subTask = parseInt(parts[1], 10);
          const arrayIndex = mainTask - 1; // Convert to 0-based

          // Перевіряємо чи це завдання на відповідність
          if (arrayIndex >= 0 && arrayIndex < tasks.length && tasks[arrayIndex]?.type === 'matching') {
            // Initialize array if not already
            if (!Array.isArray(resultArray[arrayIndex])) {
              resultArray[arrayIndex] = Array(3).fill(null);
            }
            
            // Update the specific sub-task
            if (Array.isArray(resultArray[arrayIndex])) {
              const taskArray = resultArray[arrayIndex] as (number | null)[];
              if (subTask >= 1 && subTask <= 3) { // Виправлено: до 3, а не 4
                taskArray[subTask - 1] = value;
              }
            }
          }
        } else {
          // Single choice or input questions
          const arrayIndex = parseInt(taskId, 10) - 1; // Convert to 0-based
          if (arrayIndex >= 0 && arrayIndex < tasks.length) {
            resultArray[arrayIndex] = value;
          }
        }
      });
      
      return resultArray;
      
    } catch (error) {
      console.error('Помилка при отриманні даних:', error instanceof Error ? error.message : error);
      return Array(tasks.length).fill(null);
    }
  }

  const handleSelectVariant = (taskIndex: number, variantIndex: number) => {
    setCurrentSelections(prev => {
      const updated = [...prev];
      const newValue = updated[taskIndex] === (variantIndex + 1) ? null : (variantIndex + 1);
      
      // Якщо є збережена відповідь і ми змінюємо вибір - видаляємо стару відповідь
      if (finalAnswers[taskIndex] !== null && newValue !== null) {
        removeAnswerFromServer(taskIndex);
      }
      // Або якщо скидаємо вибір
      else if (newValue === null && finalAnswers[taskIndex] !== null) {
        removeAnswerFromServer(taskIndex);
      }
      
      updated[taskIndex] = newValue;

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
      const newValue = currentTaskMatch[rowIdx] === (colIdx + 1) ? null : (colIdx + 1);
      
      // Якщо є збережена відповідь і ми змінюємо вибір - видаляємо всі збережені відповіді для цього завдання
      if (finalAnswers[currentTaskIndex] !== null && newValue !== null) {
        removeAllMatchingAnswers(currentTaskIndex);
      }
      // Або якщо скидаємо вибір
      else if (newValue === null && finalAnswers[currentTaskIndex] !== null) {
        removeAllMatchingAnswers(currentTaskIndex);
      }
      
      currentTaskMatch[rowIdx] = newValue;
      updated[currentTaskIndex] = currentTaskMatch;

      setFinalAnswers(prevFinal => {
        const updatedFinal = [...prevFinal];
        updatedFinal[currentTaskIndex] = null;
        return updatedFinal;
      });

      return updated;
    });
  };

  // Функція для перетворення строки в число, обробляючи обидва роздільники (кома та крапка)
  const parseNumberInput = (input: string): number | null => {
    if (input === '') return null;
    
    // Замінюємо кому на крапку для коректного парсингу
    const normalizedInput = input.replace(/,/g, '.');
    
    // Парсимо число
    const parsedNumber = parseFloat(normalizedInput);
    
    // Перевіряємо чи результат є числом
    if (isNaN(parsedNumber)) return null;
    
    return parsedNumber;
  };

  // Функція для обробки зміни вводу в полі для дробових чисел
  const handleInputChange = (taskIndex: number, value: string) => {
    // Дозволяємо тільки цифри, крапки, коми та мінус (для від'ємних чисел)
    const cleanedValue = value.replace(/[^0-9.,-]/g, '');
    
    // Перевіряємо чи є тільки одна крапка або кома
    const hasMultipleDots = (cleanedValue.match(/[.,]/g) || []).length > 1;
    
    // Якщо є кілька роздільників - не оновлюємо значення
    if (hasMultipleDots) return;
    
    setInputAnswers(prev => {
      const updated = [...prev];
      
      // Якщо є збережена відповідь і поле не порожнє - видаляємо стару відповідь
      if (finalAnswers[taskIndex] !== null) {
        removeAnswerFromServer(taskIndex);
      }
      
      updated[taskIndex] = cleanedValue;
      return updated;
    });

    // Скидаємо фінальну відповідь
    setFinalAnswers(prev => {
      const updated = [...prev];
      updated[taskIndex] = null;
      return updated;
    });
  };

  const handleSaveAnswer = async () => {
    // if (!userProfile || !userProfile.id) {
    //   console.error('User profile not loaded, cannot save answer');
    //   return;
    // }

    let updatedFinalAnswers = [...finalAnswers];
    let valuesToSave = [];

    // Визначаємо значення для збереження в залежності від типу завдання
    if (currentTaskIndex >= 0 && currentTaskIndex <= 14) {
      const selected = currentSelections[currentTaskIndex];
      updatedFinalAnswers[currentTaskIndex] = selected !== undefined ? selected : null;
      if (selected !== undefined && selected !== null) {
        valuesToSave.push({ task: currentTaskIndex + 1, value: selected });
      }
    } 
    else if (currentTaskIndex >= 15 && currentTaskIndex <= 17) {
      const selectedMatches = matchingSelections[currentTaskIndex];
      const processedMatches = selectedMatches.map(match => match !== null ? match : null);
      updatedFinalAnswers[currentTaskIndex] = processedMatches;
      
      // Додаємо тільки ті елементи, які не є null
      processedMatches.forEach((match, idx) => {
        if (match !== null) {
          valuesToSave.push({
            task: `${currentTaskIndex + 1}.${idx + 1}`,
            value: match
          });
        }
      });
    } 
    else if (currentTaskIndex >= 18 && currentTaskIndex <= 21) {
      const input = inputAnswers[currentTaskIndex];
      // Використовуємо нашу нову функцію для парсингу числа
      const processedInput = input.trim() !== '' ? parseNumberInput(input) : null;
      updatedFinalAnswers[currentTaskIndex] = processedInput;
      
      if (processedInput !== null && !isNaN(processedInput)) {
        valuesToSave.push({ task: currentTaskIndex + 1, value: processedInput });
      }
    }

    // Переходимо до наступного завдання або до підтвердження
    if (currentTaskIndex === tasks.length - 1) {
      setScreenMode('confirmation');
    } else {
      setTimeout(() => {
        setCurrentTaskIndex(prev => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }

    setFinalAnswers(updatedFinalAnswers);

    // Зберігаємо прогрес на бекенд тільки якщо є що зберігати
    if (valuesToSave.length > 0) {
      try {
        for (const item of valuesToSave) {
          const token = localStorage.getItem("token");
          try {
            // Спочатку пробуємо оновити запис
            const updateResponse = await fetch(`${API_BASE_URL}/progress/update`, {
              method: 'PUT',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', // Додаємо Content-Type
              },
              credentials: 'include',
              body: JSON.stringify({
                user_id: userProfile.id,
                test_id: await getTestID(userProfile.id, navigate),
                task: item.task,
                value: typeof item.value === 'object' ? JSON.stringify(item.value) : item.value
              })
            });

            if (!updateResponse.ok && updateResponse.status === 404) {
              // Якщо запис не знайдено - створюємо новий
              const progressResponse = await fetch(`${API_BASE_URL}/progress/add`, {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json', // Додаємо Content-Type
                },
                credentials: 'include',
                body: JSON.stringify({
                  user_id: userProfile.id,
                  test_id: await getTestID(userProfile.id, navigate),
                  task: item.task,
                  value: typeof item.value === 'object' ? JSON.stringify(item.value) : item.value
                })
              });

              if (!progressResponse.ok) {
                console.warn(`Failed to create progress for task ${item.task}:`, progressResponse.status);
              }
            } else if (!updateResponse.ok) {
              console.warn(`Failed to update progress for task ${item.task}:`, updateResponse.status);
            }
          } catch (fetchError) {
            console.warn(`Network error saving task ${item.task}:`);
          }
        }
      } catch (error) {
        console.warn('General error saving progress:', error);
      }
    }
  };

  const removeAnswerFromServer = async (taskIndex: number, subTaskIndex?: number) => {
    if (!userProfile) return; // Don't proceed if user profile isn't loaded

    const taskIdentifier = subTaskIndex 
        ? `${taskIndex + 1}.${subTaskIndex}` 
        : taskIndex + 1;
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${API_BASE_URL}/progress/remove`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json', // Додаємо Content-Type
        },
        credentials: 'include',
        body: JSON.stringify({
          user_id: userProfile.id,
          test_id: 1,
          task: taskIdentifier, // Adding 1 because tasks are 1-based in the backend
        })
      });

      if (!response.ok) {
        //console.error('Failed to remove answer:', await response.text());
      }
    } catch (error) {
      console.error('Error removing answer:', error);
    }
  };
  
  const removeAllMatchingAnswers = async (taskIndex: number) => {
    if (!userProfile || !userProfile.id) {
      console.warn('User profile not loaded, skipping matching answers removal');
      return;
    }

    try {
      // Видаляємо кожен підпункт окремо (1, 2, 3)
      const removePromises = [];
      for (let i = 1; i <= 3; i++) {
        removePromises.push(removeAnswerFromServer(taskIndex, i));
      }
      
      // Чекаємо завершення всіх операцій видалення
      await Promise.allSettled(removePromises);
    } catch (error) {
      console.warn('Error removing matching answers:', error);
    }
  };

  const handleFinishTest = async () => {
    localStorage.removeItem('testTimer');
    setIsSubmitting(true);
    
    const token = localStorage.getItem("token");
    
    // Перевіряємо, чи є токен (зареєстрований користувач)
    if (token) {
      try {
        const profileResponse = await fetch(`${API_BASE_URL}/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!profileResponse.ok) {
          console.error('Помилка при отриманні профілю користувача');
          // Для зареєстрованих користувачів все ще перенаправляємо при помилці
          handleBackToMenu();
          return;
        }

        const userProfile = await profileResponse.json();
        const userId = userProfile.id;

        // Отримуємо реальний результат користувача
        const summary = getAnswerSummary();
        const userScore = find200ScaleScore(summary.score);
        const finalScore = typeof userScore === 'number' ? userScore : 0;

        console.log('Відправляємо результати:', {
          user_id: userId,
          test_id: 1,
          score: finalScore,
          rawScore: summary.score,
          answers: finalAnswers
        });

        // Відправка результатів на бекенд
        const response = await fetch(`${API_BASE_URL}/test/update`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            user_id: userId,
            test_id: 1,
            score: finalScore,
            status: 2,
            old_status: 1,
            raw_score: summary.score,
            answers: finalAnswers
          })
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Тест успішно оновлено:', result);
          console.log('Результати користувача:', finalAnswers);
          setScreenMode('completion');
        } else {
          const errorData = await response.json();
          console.error('Помилка при оновленні тесту:', errorData);
          console.error('Статус відповіді:', response.status);
          alert(`Помилка при збереженні результатів тесту (${response.status}). Спробуйте ще раз.`);
        }
      } catch (error) {
        console.error('Помилка при відправці результатів:', error);
        alert('Помилка з\'єднання. Перевірте інтернет-з\'єднання та спробуйте ще раз.');
      }
    } else {
      // Логіка для незареєстрованих користувачів
      console.log('Незареєстрований користувач завершує тест');
      
      // Просто показуємо результати без збереження на сервер
      const summary = getAnswerSummary();
      console.log('Результати незареєстрованого користувача:', {
        score: summary.score,
        scale200Score: find200ScaleScore(summary.score),
        answers: finalAnswers
      });
      
      // Переходимо до екрану завершення
      setScreenMode('completion');
    }
    
    setIsSubmitting(false);
  };

    // Виправлена функція getAnswerSummary
  const getAnswerSummary = () => {
    let answered = 0;
    let score = 0;   // загальна кількість балів (максимум 32)

    finalAnswers.forEach((answer, index) => {
      const task = tasks[index];
      const correctAnswer = correctAnswers[index];

      // Перевірка чи відповів користувач
      const isAnswered = task.type === 'matching'
        ? Array.isArray(answer) && answer.some(item => item !== null)
        : answer !== null && answer !== undefined;

      if (isAnswered) {
        answered++;
      }

      // Оцінюємо всі завдання незалежно від того, чи відповів користувач
      if (task.type === 'matching' && Array.isArray(correctAnswer)) {
        if (Array.isArray(answer)) {
          // Завдання на відповідність: скільки співпало, стільки і балів (0-3)
          let matched = 0;
          for (let i = 0; i < correctAnswer.length; i++) {
            if (answer[i] === correctAnswer[i]) {
              matched++;
            }
          }
          score += matched; // Додаємо кількість правильних відповідностей
        }
        // Якщо не відповів - 0 балів (нічого не додаємо)

      } else if (task.type === 'input') {
        // Завдання відкритої форми: 2 бали за правильну відповідь, 0 за неправильну
        if (answer !== null && answer !== undefined && Number(answer) === Number(correctAnswer)) {
          score += 2;
        }
        // Якщо неправильно або не відповів - 0 балів

      } else {
        // Тестові завдання: 1 бал за правильну відповідь, 0 за неправильну
        if (answer === correctAnswer) {
          score += 1;
        }
        // Якщо неправильно або не відповів - 0 балів
      }
    });

    return { answered, score, total: tasks.length, maxScore: 32 };
  };

  // Виправлена функція isAnswerCorrect
  const isAnswerCorrect = (userAnswer: any, taskIndex: number) => {
    if (correctAnswers[taskIndex] === undefined || correctAnswers[taskIndex] === null) return false;
    
    const correctAnswer = correctAnswers[taskIndex];
    const task = tasks[taskIndex];

    if (task.type === 'matching') {
      if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) return false;
      return userAnswer.every((answer, idx) => answer === correctAnswer[idx]);
    } else if (task.type === 'input') {
      return Number(userAnswer) === Number(correctAnswer);
    } else {
      // Для тестових завдань використовуємо строге порівняння
      return userAnswer === correctAnswer;
    }
  };

  const formatAnswer = (answer: any, taskIndex: number) => {
    const task = tasks[taskIndex];
    
    if (task.type === 'matching') {
      if (Array.isArray(answer)) {
        return answer.map((match, idx) => 
          match !== null ? `${idx + 1} → ${['А', 'Б', 'В', 'Г', 'Д'][match - 1]}` : `${idx + 1} → -`
        ).join(', ');
      }
      return 'Не відповів';
    } else if (task.type === 'input') {
      return answer !== null ? answer.toString() : 'Не відповів';
    } else {
      return answer !== null ? ['А', 'Б', 'В', 'Г', 'Д'][answer - 1] : 'Не відповів';
    }
  };

  const toggleTimerVisibility = () => {
    setIsTimerVisible(prev => !prev);
  };

  // Знаходимо бал за 200-бальною шкалою на основі таблиці
  const find200ScaleScore = (correct: number) => {
    const scoreMap: Record<number, number> = {
        5: 100, 6: 108, 7: 115, 8: 123, 9: 131,
        10: 134, 11: 137, 12: 140, 13: 143, 14: 145,
        15: 147, 16: 148, 17: 149, 18: 150, 19: 151,
        20: 152, 21: 155, 22: 159, 23: 163, 24: 167,
        25: 170, 26: 173, 27: 176, 28: 180, 29: 184,
        30: 189, 31: 194, 32: 200
    };
    
    // Якщо менше 5 балів - "Не склав"
    if (correct < 5) return 'Не склав';
    
    // Якщо значення є в таблиці - повертаємо його
    if (scoreMap[correct] !== undefined) return scoreMap[correct];
    
    // Якщо більше максимального - повертаємо 200
    if (correct > 32) return 200;
    
    // Знаходимо найближчі значення для інтерполяції
    let lower = 5, higher = 32;
    for (let i = 5; i <= 32; i++) {
        if (i < correct) lower = i;
        if (i > correct) {
            higher = i;
            break;
        }
    }
    
    // Інтерполяція між найближчими значеннями
    const lowerScore = scoreMap[lower];
    const higherScore = scoreMap[higher];
    return Math.round(lowerScore + (correct - lower) * (higherScore - lowerScore) / (higher - lower));
  };

  const handleBackToMenu = () => {
    localStorage.removeItem('testCompleted');
    navigate(-1);
  };

  const handleImageClick = (imageUrl: string) => {
    setEnlargedImage(imageUrl);
  };

  const handleCloseEnlarged = () => {
    setEnlargedImage(null);
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
                disabled={isSubmitting}
              >
                Повернутися до тесту
              </button>
              <button 
                onClick={handleFinishTest}
                className="finish-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Збереження...' : 'Завершити тест'}
              </button>
            </div>
          </div>
        </div>
      </MathJaxContext>
    );
  }

  if (screenMode === 'completion') {
    const summary = getAnswerSummary();
    const correctCount = summary.score;
    // Виправлено розрахунок відсотку - від максимальної кількості балів
    const percentage = Math.round((summary.score / summary.maxScore) * 100);
    const score200 = find200ScaleScore(correctCount);

    return (
      <MathJaxContext>
          <div className="completion-screen">
              <h1>Тест завершено!</h1>
              
              <div className="test-summary">
                  <h2>Підсумок виконання:</h2>
                  <p><strong>Відповіли:</strong> {summary.answered}/{summary.total}</p>
                  <p><strong>Тестових балів:</strong> {correctCount}/32</p>
                  <p><strong>Відсоток правильних:</strong> {percentage}%</p>
                  <p className="score-200"><strong>Бал за шкалою 100-200:</strong> <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{score200}</span></p>
              </div>

              <div className="detailed-results">
                  <h3>Детальні результати:</h3>
                  <div className="results-list">
                      {finalAnswers.map((answer, index) => {
                          const isCorrect = isAnswerCorrect(answer, index);
                          return (
                              <div 
                                  key={index} 
                                  className={`result-item ${isCorrect ? 'correct' : ''}`}
                                  onClick={() => handleTaskClick(index)}
                                  style={{ cursor: 'pointer' }}
                              >
                                  <span className="task-number">Завдання {index + 1}:</span>
                                  <span className="answer-text">{formatAnswer(answer, index)}</span>
                              </div>
                          );
                      })}
                  </div>
              </div>

              <div className="completion-buttons">
                  <button 
                      onClick={() => handleBackToMenu()}
                      className="back-to-menu-button"
                  >
                      Повернутися до вибору тестів
                  </button>
              </div>
          </div>
      </MathJaxContext>
    );
  }

  if (screenMode === 'review' && reviewTaskIndex !== null) {
    const task = tasks[reviewTaskIndex];
    const answer = finalAnswers[reviewTaskIndex];
    const correctAnswer = correctAnswers[reviewTaskIndex];
    const isMatchingType = task.type === 'matching';
    const isInputType = task.type === 'input';

    // Define types for your task variants and options
    type Variant = {
        text: string;
        image?: string;
    };

    type Option = {
        text: string;
    };

    return (
      <MathJaxContext>
        <div className="review-screen-container">
          <div className="review-header-container">
            <h2 className="review-title">Перегляд завдання {reviewTaskIndex + 1}</h2>
          </div>

          <div className="review-content-container">
            <div className="task-content-container">
              <div className="task-text-wrapper">
                <SmartText text={task.text} className="task-main-text-review" />
              </div>
              {task.image && (
                <div className="task-image-wrapper">
                  <img src={task.image} alt="Завдання" className="task-image-review" />
                </div>
              )}
            </div>

            {/* Display variants for non-matching and non-input tasks */}
            {!isMatchingType && !isInputType && (
              <div className="variants-review-container">
                <div className="all-variants-list">
                  {task.variants?.map((variant: Variant, idx: number) => {
                    const variantLabel = ['А', 'Б', 'В', 'Г', 'Д'][idx];
                    
                    return (
                      <div 
                        key={idx} 
                        className="variant-item-review"
                      >
                        <span className="variant-label">{variantLabel}:</span>
                        <div className="variant-content">
                          <SmartText text={variant.text} />
                          {variant.image && (
                            <img src={variant.image} alt={`Варіант ${idx + 1}`} className="variant-image" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="answer-feedback-container">
                  <div className="user-choice-section answer-feedback-item">
                    <h3 className="user-choice-title">Ваш вибір:</h3>
                    {answer !== null ? (
                      <div className="user-choice-value">
                        {['А', 'Б', 'В', 'Г', 'Д'][Number(answer) - 1]}
                      </div>
                    ) : (
                      <div className="no-choice-message">Не вибрано</div>
                    )}
                  </div>

                  <div className="correct-choice-section answer-feedback-item">
                    <h3 className="correct-choice-title">Правильний вибір:</h3>
                    <div className="correct-choice-value">
                      {['А', 'Б', 'В', 'Г', 'Д'][correctAnswer - 1]}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Display matching task review */}
            {isMatchingType && (
              <div className="matching-review-container">
                <h3 className="matching-title">Варіанти відповідей:</h3>
                <div className="matching-grid-review">
                  <div className="left-column-review">
                    {task.leftTitle && (
                      <div className="column-header">
                        <SmartText text={task.leftTitle} />
                      </div>
                    )}
                    {task.leftOptions?.map((option: Option, idx: number) => (
                      <div key={idx} className="left-item">
                        <strong>{idx + 1}.</strong> <SmartText text={option.text} />
                      </div>
                    ))}
                  </div>

                  <div className="right-column-review">
                    {task.rightTitle && (
                      <div className="column-header">
                        <SmartText text={task.rightTitle} />
                      </div>
                    )}
                    {task.variants?.map((variant: Variant, idx: number) => (
                      <div key={idx} className="variant-item">
                        <span className="variant-label">{['А', 'Б', 'В', 'Г', 'Д'][idx]}:</span>
                        <SmartText text={variant.text} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="matching-answers-review-container">
                  <div className="user-matching-answers answer-feedback-item">
                    <h3 className="user-answers-title">Ваші відповіді:</h3>
                    {answer && Array.isArray(answer) ? (
                      answer.map((selectedIdx: number | null, rowIdx: number) => (
                        <div key={rowIdx} className="matching-answer-row">
                          <span>{rowIdx + 1} → {selectedIdx !== null ? ['А', 'Б', 'В', 'Г', 'Д'][selectedIdx - 1] : 'Не вибрано'}</span>
                        </div>
                      ))
                    ) : (
                      <div className="no-answer-message">Не відповіли</div>
                    )}
                  </div>

                  <div className="correct-matching-answers answer-feedback-item">
                    <h3 className="correct-answers-title">Правильні відповіді:</h3>
                    {correctAnswer && Array.isArray(correctAnswer) ? (
                      correctAnswer.map((correctIdx: number | null, rowIdx: number) => (
                        <div key={rowIdx} className="matching-answer-row">
                          <span>{rowIdx + 1} → {correctIdx !== null ? ['А', 'Б', 'В', 'Г', 'Д'][correctIdx - 1] : ''}</span>
                        </div>
                      ))
                    ) : (
                      <div className="no-correct-answer-message">Немає правильної відповіді</div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Display input answer review */}
            {isInputType && (
              <div className="input-review-container">
                <div className="answer-feedback-container">
                  <div className="user-answer-section answer-feedback-item">
                    <h3 className="user-answer-title">Ваша відповідь:</h3>
                    <div className="user-answer-value">
                      {formatAnswer(answer, reviewTaskIndex)}
                    </div>
                  </div>

                  <div className="correct-answer-section answer-feedback-item">
                    <h3 className="correct-answer-title">Правильна відповідь:</h3>
                    <div className="correct-answer-value">
                      {formatAnswer(correctAnswer, reviewTaskIndex)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button 
              onClick={() => setScreenMode('completion')}
              className="review-back-button"
            >
              Повернутися до результатів
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
              <SmartText text={'<br>' + currentTask.text} className="main-text" />
              {currentTask.image && (
                <img 
                  src={currentTask.image} 
                  alt="Завдання" 
                  className="button-image task-image"
                  onClick={() => handleImageClick(currentTask.image)}
                />
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
                        // Перевіряємо чи вибраний елемент, враховуючи нову індексацію
                        const isActive = matchingSelections[currentTaskIndex]?.[rowIdx] === (colIdx + 1);
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
                    inputMode="decimal" // Показуємо відповідну клавіатуру на мобільних пристроях
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
                        <img 
                          src={variant.image} 
                          alt={`Варіант ${idx + 1}`} 
                          className="variant-image"
                          onClick={() => handleImageClick(variant.image)}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="variant-buttons">
                  {['А', 'Б', 'В', 'Г', 'Д'].map((label, idx) => (
                    <button
                      key={idx}
                      className={`variant-button ${currentSelections[currentTaskIndex] === (idx + 1) ? 'active' : ''}`}
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

            <div className="timer-container">
              {isTimerVisible && (
                <div className="timer">
                  {formatTime(timeLeft)}
                </div>
              )}
              <button 
                onClick={toggleTimerVisibility}
                className="toggle-timer-button"
                data-visible={isTimerVisible}
                aria-label={isTimerVisible ? 'Приховати таймер' : 'Показати таймер'}
              />
            </div>

            <button onClick={() => setScreenMode('help')} className="help-button">
              Довідка
            </button>
          </>
        ) : (
          <HelpPage onBack={() => setScreenMode('test')} />
        )}

        {enlargedImage && (
          <div className="enlarged-image-overlay" onClick={handleCloseEnlarged}>
            <div className="enlarged-image-container">
              <img 
                src={enlargedImage} 
                alt="Збільшене зображення" 
                className="enlarged-image"
                // onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
      <div style={{ height: '20vh', width: '100%' }}></div>

    </MathJaxContext>
  );
};

export default Test;