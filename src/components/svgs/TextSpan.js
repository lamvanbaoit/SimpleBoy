import React, { memo } from "react";
import styled from "styled-components";

const TextSpan = ({ title, ...props }) => {
  return (
    <Span
      className="Test"
      {...props}
      contentEditable='true'
      spellCheck='false'
    >
    </Span>
  );
};

export default memo(TextSpan);

const Span = styled.span`
  :empty:before {
    content: attr(placeholder);
    color: #999;
  }

  :focus {
    outline: 1pt dashed #77a5cc;
  }
`;
