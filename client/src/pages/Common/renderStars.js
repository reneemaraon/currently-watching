const renderStars = (rating, starObject) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(starObject);
  }
  return stars;
};

export default renderStars;
