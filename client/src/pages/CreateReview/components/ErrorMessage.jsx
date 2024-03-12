const ErrorMessage = ({ children }) => {
  return (
    <div className="text-red-600 px-1 pt-1 info-text font-normal">
      {children}
    </div>
  );
};

export default ErrorMessage;
