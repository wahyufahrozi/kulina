import styled from "styled-components";

export const ButtonContainer = styled.div`
  flex-direction: row;
  width: 100%;
  display: flex;
  margin-bottom: 8px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  border-radius: 4px;
  padding: 0.25em 6em;
  border: none;
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? " #424749" : "white")};
  color: ${props => (props.primary ? "white" : "#f1f1f2")};
`;
