import * as React from "react";
import { render } from "react-dom";
import Code from "react-code-prettify";
import CodeInput from "./input";
import Button from "./button";
import Message from "./message";
import { ChatProvider, ChatContext } from "./chatContext";
import "./styles.css";
import ChatWrapper from "./chatWrapper";

const App = () => {
  const context = React.useContext(ChatContext);
  const { state, set, codeSyntax } = context;
  const write = () => {
    if (state.currentType) {
      if (codeSyntax && state.currentType.slice(0, 6) !== "/code>") {
        set({
          ...state,
          chat: [...state.chat, `/code>${state.currentType}`]
        });
      } else {
        set({
          ...state,
          chat: [...state.chat, state.currentType]
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
              {item.slice(0, 6) === "/code>" ? (
                <Code
                  codeString={item.slice(6, item.length)}
                  language="javascript"
                />
              ) : (
                <Message>{item}</Message>
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

const rootElement = document.getElementById("root");
render(
  <ChatProvider>
    <App />
  </ChatProvider>,
  rootElement
);
