import testImage from '../image/help.jpg';
import testImage1 from '../image/help1.jpg';
import testImage2 from '../image/help2.jpg';
import React from 'react';
import '../help.css';

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
      <img
        src={testImage1}
        alt="Help"
        className="help-image1"
      />
      <img
        src={testImage2}
        alt="Help"
        className="help-image2"
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