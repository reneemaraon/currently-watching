const generateSearchConditions = (filter, searchFields) => {
  const {
    limit = 20,
    search,
    cursorField = "createdAt",
    cursorValue,
    cursorNumValue,
    cursorType = "date",
    ascending = false,
  } = filter;

  const searchConditions = {};
  const cursorConditions = {};
  if (search) {
    const regex = { $regex: new RegExp(search, "i") };
    searchConditions.$or = searchFields.map((field) => ({ [field]: regex }));
  }

  if (cursorValue) {
    var queryObject = {};
    if (cursorType == "date") {
      queryObject = new Date(cursorValue);
    } else if (cursorType == "number") {
      queryObject = cursorNumValue;
    }

    cursorConditions[cursorField] = ascending
      ? { $gt: queryObject }
      : { $lt: queryObject };
  }

  return {
    searchConditions,
    cursorConditions,
    options: {
      limit,
      sort: { [cursorField]: ascending ? 1 : -1 },
    },
  };
};

module.exports = { generateSearchConditions };
