const renderStars = (rating, starObject) => {
  return Array.from({ length: rating }, (_, index) => ({
    ...starObject,
    key: index.toString(), // Unique key for each star
  }));
};
export default renderStars;
