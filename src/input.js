import React, { useContext } from "react";
import styled from "styled-components";
import { ChatContext } from "./chatContext";

const CodeInput = props => {
  const context = useContext(ChatContext);
  const { set, state, setCs, codeSyntax } = context;
  const handleCode = e => {
    if (codeSyntax) {
      if (state.currentType.slice(0, 6) === "/code>") {
        set({
          ...state,
          currentType: e.target.value
        });
      } else {
        set({
          ...state,
          currentType: `/code>${e.target.value}`
        });
      }
    } else {
      set({
        ...state,
        currentType: e.target.value
      });
    }
  };
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Input
        placeholder="Type something..."
        onChange={handleCode}
        value={state.currentType}
      />
      <Code cs={codeSyntax} onClick={() => setCs(!codeSyntax)}>
        {"</>"}
      </Code>
    </div>
  );
};
const Code = styled.button`
  background-color: ${({ cs }) => (cs ? "#3ebd93" : "#1f2933")};
  border-radius: 0px 5px 5px 0px;
  width: 50px;
  font-weight: 700;
  font-size: 18px;
  height: 30px;
  z-index: 10;
  cursor: pointer;
  border: none;
  margin-right: 5px;
  height: 41px;
  color: ${({ cs }) => (cs ? "#fff" : "#969896")};
  font-family: "Consolas";
`;
const Input = styled.textarea`
  height: 30px;
  width: 100%;
  resize: none;
  background-color: #e4e7eb;
  border: none;
  border-radius: 5px 0px 0px 5px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Proxima Nova";
  color: #52606d;
  font-size: 16px;
  &::placeholder {
    color: #9aa5b1;
  }
`;
export default CodeInput;
