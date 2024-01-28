import React from 'react';

const CustomButton = ({ styleSet, size, edge, onClick, children }) => {
  const styleSets = {
    primary: 'bg-brand-tq text-white hover:bg-brand-tq-hover',
    gradient: 'bg-gradient-to-r from-[#3876BF] via-sky-500 to-brand-tq text-white hover:to-brand-tq-hover hover:via-sky-600 hover:from-blue-600',
  };

  // Default to 'primary' if the specified style set doesn't exist
  const selectedStyle = styleSets[styleSet] || styleSets['primary'];

  const sizeSets = {
    defaultSize: 'h-12 px-5 py-4 gap-2'
  }

  const selectedSize = sizeSets[size] || sizeSets['defaultSize'];


  const edgeStyles = {
    defaultEdge: 'rounded-lg'
  }

  const selectedEdge = edgeStyles[edge] || edgeStyles['defaultEdge'];


  return (
    <button
      className={`py-2 px-4 justify-center items-center inline-flex ${selectedEdge} ${selectedSize} ${selectedStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
