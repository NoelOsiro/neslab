// NextButton.tsx
import React from 'react';

const NextButton: React.FC<{ 
    onClick: () => void
    text:string
    disabled:boolean }> = ({ 
        onClick,
        text,
        disabled }) => {
  return (
    <button
      className="inline-flex text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        className="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="gem"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path fill="currentColor" d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path>
      </svg>
      {text}
    </button>
  );
};

export default NextButton;
