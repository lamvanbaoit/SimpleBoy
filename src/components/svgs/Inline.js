import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styled from "styled-components";

export default function Inline({ Counterproject, Counter, placeholder, title, ...props }) {

    return (
        <ContextDiv style={{ position: "relative" }}>
            <Div>
                <Editor
                    {...props}
                    initialValue={placeholder}
                    init={{
                        placeholder: "......",
                        inline: true,
                        height: 0,
                        menubar: false,
                        plugins: [
                            'lists',
                            'powerpaste',
                            'autolink',
                            // 'link'
                        ],
                        toolbar:
                            // 'undo redo | ' +
                            'bold italic underline  | link',
                        // ' bullist numlist | ',

                        content_elements: 'strong,em,span[style],a[href]',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }',
                        powerpaste_word_import: 'clean',
                        powerpaste_html_import: 'clean',
                    }}
                />
            </Div>
            {/* <button className="addbtn" onClick={Counterproject}>+</button> */}
            {/* <button className="addbtn1" onClick={Counter} >-</button> */}
        </ContextDiv>
    );
}

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
      z-index: 100;
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
      z-index: 100;

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

    // background-color: #e3e3e3;
    // color: #000;
    // border: none;
    // outline: 1px solid #ccc;
    // box-shadow: 50px 0 0px 4px #e3e3e3, -50px 0 0 4px #e3e3e3;
    // z-index: 100;
    // border-radius: 0.1px;
  }
  
  *[contentEditable="true"]:focus,
  *[contentEditable="true"]:hover {
    outline: 1pt dashed #77a5cc; 
  
    // background-color: #e3e3e3;
    //   color: #000;
    //   border: none;
    //   box-shadow: 50px 0 0px 4px #e3e3e3, -50px 0 0 4px #e3e3e3;
      z-index: 100;
    border-radius: 0.1px;
  }
`

