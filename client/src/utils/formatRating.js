const formatRating = (rating) => (rating % 1 > 0 ? rating.toFixed(1) : rating);

export default formatRating;
