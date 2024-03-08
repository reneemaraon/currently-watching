import { useState } from 'react';

const TextInput = ({ value, onValueChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div
      className={`${
        isFocused ? 'border-brand-gray' : 'border-light-stroke'
      }  border w-full max-w-[600px] flex-col justify-center items-start gap-2.5 flex input-area`}
    >
      <input
        type="text"
        className="leading-tight w-full bg-transparent focus:outline-none placeholder-lighter-text"
        placeholder="Write a headline here"
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default TextInput;
