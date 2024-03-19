function formatDateTime(dateTime) {
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const currentDate = new Date();
  const targetDate = new Date(dateTime);

  const diffInMs = Math.abs(targetDate - currentDate);
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 7) {
    return targetDate.toLocaleDateString("en-GB", options);
  } else if (diffInDays < 7 && diffInDays > 1) {
    return `${diffInDays} day${diffInDays == 1 ? "" : "s"} ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours == 1 ? "" : "s"} ago`;
  } else {
    return `${diffInMinutes} minute${diffInMinutes == 1 ? "" : "s"} ago`;
  }
}

export default formatDateTime;
