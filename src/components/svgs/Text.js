import React, { memo } from "react";
import styled from "styled-components";

const Text = ({ title, ...props }) => {

  return (
    <Div
      className="Test"
      {...props}
      contentEditable='true'
      spellCheck='false'

    >
    </Div>
  );
};

export default memo(Text);

const Div = styled.div`
  font-weight: 400;


  :empty:before {
    content: attr(placeholder);
    color: #999;
  }

  :focus-within {
    outline: 1pt dashed #77a5cc;

    // background-color: #e3e3e3;
    // // color: #000;
    // border: none;
    // // outline: 1px solid #ccc;
    // // box-shadow: 50px 0 0px 4px #e3e3e3, -50px 0 0 4px #e3e3e3;
    // z-index: 10000;
    // border-radius: 0.1px;
  }
`;
