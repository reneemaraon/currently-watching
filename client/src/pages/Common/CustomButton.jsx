import React from 'react';

const CustomButton = ({ disabled, styleSet, size, edge, onClick, children }) => {
  const styleSets = {
    primary: 'bg-brand-tq text-white hover:bg-brand-tq-hover',
    gradient: 'bg-gradient-to-r from-[#3876BF] via-sky-500 to-brand-tq text-white hover:from-cyan-700 hover:via-sky-600 hover:to-cyan-600',
    dark: 'bg-text-dark text-theme-base hover:bg-gray-700',    
    secondary: 'bg-brand-gray text-theme-base hover:bg-gray-400'    
  };

  // Default to 'primary' if the specified style set doesn't exist
  const selectedStyle = styleSets[styleSet] || styleSets['primary'];

  const sizeSets = {
    defaultSize: 'h-12 px-5 py-3 gap-2 font-medium text-base',
    defaultResize: 'sm:h-12 sm:px-5 sm:py-3 sm:gap-2 sm:font-medium sm:text-base h-8 px-2.5 py-2 gap-1 font-light text-xs',
    smallSize: 'h-8 px-2.5 py-2 gap-1 font-light text-xs',
  }

  const selectedSize = sizeSets[size] || sizeSets['defaultSize'];


  const edgeStyles = {
    defaultEdge: 'rounded-lg',
    rounded: 'rounded-full'
  }

  const selectedEdge = edgeStyles[edge] || edgeStyles['defaultEdge'];

  const stateStyle = disabled ? 'opacity-50 pointer-events-none' : ''

  return (
    <button
      className={`py-2 px-4 justify-center items-center inline-flex ${stateStyle} ${selectedEdge} ${selectedSize} ${selectedStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
