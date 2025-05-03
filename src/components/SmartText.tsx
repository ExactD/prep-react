import React, { useEffect } from 'react';
import { MathJax } from 'better-react-mathjax';

interface SmartTextProps {
  text: string;
  className?: string;
}

declare global {
  interface Window {
    MathJax: {
      typesetPromise?: () => Promise<void>;
    };
  }
}

const SmartText: React.FC<SmartTextProps> = ({ text, className }) => {
  // Примусово ререндеримо формули при зміні text
  useEffect(() => {
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
      window.MathJax.typesetPromise();
    }
  }, [text]);

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