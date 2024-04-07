const findCursor = (list, sortField) => {
  if (list && list.length > 0) {
    return list[list.length - 1][sortField];
  } else {
    return null;
  }
};

export default findCursor;
