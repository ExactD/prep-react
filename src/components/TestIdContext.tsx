import React, { createContext, useContext, useState } from 'react';

// Тип для контексту (лише число або null)
type TestIdContextType = {
  testId1: number | null;
  setTestId1: (id: number | null) => void;
};

// Створюємо контекст з початковим значенням null
const TestIdContext = createContext<TestIdContextType>({
  testId1: null,
  setTestId1: () => {}, // Пуста функція-заглушка
});

// Провайдер для обгортання додатка
export const TestIdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [testId1, setTestId1] = useState<number | null>(null);

  return (
    <TestIdContext.Provider value={{ testId1, setTestId1 }}>
      {children}
    </TestIdContext.Provider>
  );
};

// Хук для спрощеного доступу
export const useTestId = () => useContext(TestIdContext);