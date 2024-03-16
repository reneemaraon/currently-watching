import React from 'react';

const HTMLRenderer = ({ htmlString }) => {
  const modifiedHtml = htmlString.replace(/<p>\s*<\/p>/g, '<p>&nbsp;</p>');
  return (
    <div
      className="px-2 py-3 sm:py-10 leading-7 text-base inline-flex flex-col"
      dangerouslySetInnerHTML={{ __html: modifiedHtml }}
    />
  );
};

export default HTMLRenderer;
