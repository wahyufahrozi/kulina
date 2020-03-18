import styled from "styled-components";

export const ButtonContainer = styled.div`
  flex-direction: row;
  width: 50%;
  display: flex;
  margin-bottom: 20px;
  text-align: center;
  margin-left: 5%;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  border-radius: 4px;
  padding: 0.25em 6em;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  outline: 1px solid #f1f1f2;
  background: ${props => (props.primary ? " #424749" : "white")};
  color: ${props => (props.primary ? "white" : "#f1f1f2")};
`;
