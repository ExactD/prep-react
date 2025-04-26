import React from 'react';
import { MathJax } from 'better-react-mathjax';

interface SmartTextProps {
  text: string;
  className?: string;
}

const SmartText: React.FC<SmartTextProps> = ({ text, className }) => {
  // Розбиваємо рядок по inline LaTeX виразах: \(...\)
  const parts = text.split(/(\\\(.*?\\\))/g);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        part.startsWith("\\(") && part.endsWith("\\)") ? (
          <MathJax key={index} inline>{part}</MathJax>
        ) : (
          <span
            key={index}
            dangerouslySetInnerHTML={{ __html: part }}
          />
        )
      )}
    </span>
  );
};

export default SmartText;