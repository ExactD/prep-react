import testImage from '../image/help.jpg';
import React from 'react';

interface HelpPageProps {
  onBack: () => void;
}

export default function HelpPage({ onBack }: HelpPageProps) {
  return (
    <div className="relative h-full flex flex-col items-center justify-center">
      <img
        src={testImage}
        alt="Help"
        className="help-image"
      />
      <button
        onClick={onBack}
        className="back-help-button"
      >
        Назад
      </button>
    </div>
  );
}