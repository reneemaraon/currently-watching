const generateSearchConditions = (filter, searchFields) => {
  const { page = 1, limit = 20, search } = filter;

  const searchConditions = {};
  if (search) {
    const regex = { $regex: new RegExp(search, 'i') };
    searchConditions.$or = searchFields.map((field) => ({ [field]: regex }));
  }

  return {
    searchConditions,
    options: {
      limit: limit * 1,
      skip: (page - 1) * limit,
    },
  };
};

module.exports = { generateSearchConditions };
