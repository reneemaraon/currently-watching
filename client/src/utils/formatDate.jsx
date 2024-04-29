function formatDateTime(dateTime) {
  const options = {
    day: "2-digit",
    month: "short",
  };

  const currentDate = new Date();
  const targetDate = new Date(dateTime);

  const diffInMs = Math.abs(targetDate - currentDate);
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 10) {
    if (targetDate.getFullYear() !== currentDate.getFullYear()) {
      options.year = "numeric";
    }
    return targetDate.toLocaleDateString("en-US", options);
  } else if (diffInDays <= 10 && diffInDays > 0) {
    return `${diffInDays} day${diffInDays == 1 ? "" : "s"} ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour${diffInHours == 1 ? "" : "s"} ago`;
  } else if (diffInMinutes == 0) {
    return "seconds ago";
  } else {
    return `${diffInMinutes} minute${diffInMinutes == 1 ? "" : "s"} ago`;
  }
}

export default formatDateTime;
