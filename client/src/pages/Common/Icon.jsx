import React from 'react'

const Icon = ({ sizeRules, fill, children }) => {
  return (
    <div className={sizeRules || 'w-4 h-4'}>
      <svg viewBox="0 0 22 22" className={fill || "fill-theme-base"}>
        {children}
      </svg>
    </div>
  )
}


export default Icon;