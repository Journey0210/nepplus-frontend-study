import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  width: 268px;
  height: 36px;
  background: #fafafa;
  outline: none;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 9px 8px 7px 8px;
  line-height: 3;
  ::placeholder {
    color: gray;
    font-size: 12px;
  }
  margin-bottom: 6px;
`;
