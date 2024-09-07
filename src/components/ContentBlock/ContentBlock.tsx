import React from "react";

type ContentBlockProps = {
  id?: string;
  header: string;
  paragraph: React.ReactNode;
};

const ContentBlock: React.FC<ContentBlockProps> = ({
  id,
  header,
  paragraph,
}) => {
  return (
    <div id={id}>
      <h2>{header}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default ContentBlock;
