import React, { createContext, useState } from "react";

export const ChatContext = createContext();

// This context provider is passed to any component requiring the context
export const ChatProvider = ({ children }) => {
  const [state, set] = useState({ chat: [], currentType: undefined });
  const [codeSyntax, setCs] = React.useState(false);

  return (
    <ChatContext.Provider
      value={{
        state,
        set,
        codeSyntax,
        setCs
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
