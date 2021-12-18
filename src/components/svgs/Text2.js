import React, { memo } from "react";
import styled from "styled-components";
// import Inline from "./Inline";


const Text2 = ({ title, ...props }) => {


  return (
    <>

      <Div
        className="Test"
        {...props}
        contentEditable='true'
        spellCheck='true'

        type="text"
        blockkey="project"
        fieldkey="description"
        cvo-form-field="true"
        contenteditable="true"
        cvo-validatable="true"
        cvo-validation-errors="{}"

      >

      </Div>
      {/* <Inline />s */}
    </>

  );
};

export default memo(Text2);

const Div = styled.div`
  font-size: 18px;
  font-weight: 500;

  :empty:before {
    content: attr(placeholder);
    color: #000;
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
