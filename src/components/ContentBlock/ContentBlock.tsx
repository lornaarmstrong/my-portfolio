import React from "react";

type ContentBlockProps = {
  id?: string;
  header: string;
  content: React.ReactNode;
};

const ContentBlock: React.FC<ContentBlockProps> = ({ id, header, content }) => {
  return (
    <div id={id}>
      <h2>{header}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ContentBlock;
