import React from 'react'

const StrokedIcon = ({ sizeRules, fill, children }) => {
  return (
    <div className={sizeRules || 'w-4 h-4'}>
      <svg viewBox="0 0 22 22" className={fill || "fill-text-dark"}>
        {children}
      </svg>
    </div>
  )
}


export default StrokedIcon;