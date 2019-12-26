import * as React from "react";
import { render } from "react-dom";
import Code from "react-code-prettify";
import CodeInput from "./input";
import Button from "./button";
import Message from "./message";
import { ChatProvider, ChatContext } from "./chatContext";
import "./styles.css";
import styled, { css } from "styled-components";

import ChatWrapper from "./chatWrapper";

const App = () => {
  const context = React.useContext(ChatContext);
  const { state, set, codeSyntax } = context;
  const style = owner => {
    if (owner === "me") {
      return { marginRight: 0, marginLeft: "auto" };
    }
  };
  const write = () => {
    if (state.currentType) {
      if (codeSyntax && state.currentType.slice(0, 6) !== "/code>") {
        set({
          ...state,
          chat: [
            ...state.chat,
            { msg: `/code>${state.currentType}`, owner: "me" }
          ]
        });
      } else {
        set({
          ...state,
          chat: [...state.chat, { msg: state.currentType, owner: "me" }]
        });
      }
    }
  };
  const ref = React.useRef(0);
  React.useEffect(() => {
    ref.current.scrollTo(0, 1000);
  }, [state.chat]);
  return (
    <div className="App">
      <ChatWrapper ref={ref}>
        {state.chat.map((item, i) => {
          return (
            <div key={i} style={{ margin: "10px 0px" }}>
              {item.msg.slice(0, 6) === "/code>" ? (
                <CodeWrapper owner={item.owner}>
                  <Code
                    codeString={item.msg.slice(6, item.msg.length)}
                    language="javascript"
                  />
                </CodeWrapper>
              ) : (
                <Message owner={item.owner}>{item.msg}</Message>
              )}
            </div>
          );
        })}
      </ChatWrapper>
      <div style={{ display: "flex", width: "100%" }}>
        <CodeInput type="text" value={state.currentType} />
        <Button onClick={write}>Send</Button>
      </div>
    </div>
  );
};

const CodeWrapper = styled.div`
  .prettyprint {
    ${({ owner }) =>
      owner === "me" &&
      css`
        margin-right: 0px;
        margin-left: auto;
      `}
  }
`;
const rootElement = document.getElementById("root");
render(
  <ChatProvider>
    <App />
  </ChatProvider>,
  rootElement
);
