import styled from "styled-components";

const ChatWrapper = styled.div`
  min-height: 85vh;
  max-height: 85vh;
  width: 100%;
  background-color: #fbfbfc;
  box-shadow: 0px 7px 22px rgba(203, 203, 208, 0.18);
  border: none;
  border-radius: 5px;
  overflow-y: scroll;
  transition: all 0.2s;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #969896;
  }
  .prettyprint {
    max-width: 300px;
    padding: 10px;
    box-shadow: 0px 7px 22px rgba(203, 203, 208, 0.48);
  }
`;
export default ChatWrapper;
