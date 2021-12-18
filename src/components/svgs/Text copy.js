import React, { memo } from "react";
import styled from "styled-components";


const Text = ({ title, ...props }) => {
  return (

    <ContextDiv style={{ position: "relative" }}>
      <Div
        className="Test"
        {...props}
        contentEditable='true'
        spellCheck='false'

      >
      </Div>
      <button className="addbtn" >+</button>
      <button className="addbtn1" >-</button>
    </ContextDiv>
  );
};

export default memo(Text);

const ContextDiv = styled.div`
  .addbtn, .addbtn1 {
    display: none;
    
  }

  :focus-within {
    .addbtn {
      display: block;
      position: absolute;
      top: 1px;
      left: -44px;

      border: 0;
      outline: 0;
      border-radius: 50%;
      width: 1.2rem;
      height: 1.2rem;
      color: #333;
      font-size: 14px;
      background-color: rgb(79, 144, 205);
      

    }
  }
  
  :focus-within {
    .addbtn1 {
      display: block;
      position: absolute;
      top: 1px;
      right: -44px;

      border: 0;
      outline: 0;
      border-radius: 50%;
      width: 1.2rem;
      height: 1.2rem;
      color: #333;
      font-size: 14px;
      background-color: rgb(79, 144, 205);
    }
  }

`

const Div = styled.div`
  font-size: 16px;
  font-weight: 400;
  
  :empty:before {
    content: attr(placeholder);
    color: #999;
  }

  :focus-within {
    outline: 1pt dashed #77a5cc;

    background-color: #f9fafa;
    color: #000;
    border: none;
    box-shadow: 50px 0 0px 4px #f4f5f5, -50px 0 0 4px #f4f5f5;
    z-index: 1;
    border-radius: 0.1px;
  }
    
  // .addbtn {
  //   border: 0;
  //   outline: 0;
  //   border-radius: 50%;
  //   width: 1.4rem;
  //   height: 1.4rem;
  //   color: #333;
  //   font-size: 16px;
  //   background-color: rgb(79, 144, 205);
  //   position: absolute;
  //   top: 2px;
  //   left: -20px;
  //   opacity: 1;
  //   transition: all 0.2s ease-in-out;
  //   cursor: pointer;
  //   display: none;
  // }

  // .addbtn1 {
  //   border: 0;
  //   outline: 0;
  //   border-radius: 50%;
  //   width: 22px;
  //   height: 22px;
  //   color: #333;
  //   font-size: 16px;
  //   background-color: rgb(79, 144, 205);
  //   position: absolute;
  //   top: 2px;
  //   right: 0;
  //   opacity: 1;
  //   transition: all 0.2s ease-in-out;
  //   cursor: pointer;
  //   display: none;
  // }

`;
