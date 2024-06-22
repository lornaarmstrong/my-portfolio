import React from "react";

type ContentBlockProps = {
  header: string;
  paragraph: string;
};

const ContentBlock: React.FC<ContentBlockProps> = ({ header, paragraph }) => {
  return (
    <div>
      <h2>{header}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default ContentBlock;
