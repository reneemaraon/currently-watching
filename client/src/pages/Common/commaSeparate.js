const commaSeparatedString = (items) => {
  let combinedString = items
    .map((item, index) => {
      if (index === items.length - 1) {
        return item;
      } else {
        return item + ', ';
      }
    })
    .join('');
  return combinedString;
};

export default commaSeparatedString;
