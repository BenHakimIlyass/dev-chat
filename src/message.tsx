import styled, { css } from "styled-components";

const Message = styled.div`
  ${({ owner }) =>
    owner === "me" &&
    css`
      margin-right: 5px;
      margin-left: auto;
    `}
  height: auto;
  padding: 10px;
  box-shadow: 0px 7px 22px rgba(203, 203, 208, 0.48);
  max-width: 300px;
  background-color: ${({ owner }) => (owner === "me" ? "#D8FBBD" : "#fff")};
  color: ${({ owner }) => (owner === "me" ? "#1A7D1A" : "#52606D")};
  border: none;
  font-family: "Proxima Nova";
  border-radius: 5px;
  font-size: 16px;
`;
export default Message;
