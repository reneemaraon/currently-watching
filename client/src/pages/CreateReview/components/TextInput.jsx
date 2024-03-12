import { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const TextInput = ({ value, onValueChange, errorMessage }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <div className="w-full inline-flex flex-col">
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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextInput;
