const stripHtmlTags = (html) => {
  // Replace HTML tags with space
  let strippedText = html.replace(/<\/?[^>]+(>|$)/g, ' ');

  // Replace consecutive spaces with single space
  strippedText = strippedText.replace(/\s{2,}/g, ' ');

  return strippedText;
};

export default stripHtmlTags;
