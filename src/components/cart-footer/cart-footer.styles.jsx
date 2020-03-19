import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 12px;
  width: 100%;
  background-color: #a23530;
  color: white;
  text-align: center;
  height: 50px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const CartContent = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  color: #e2e4e4;
  font-weight: bold;
  padding-left: 16px;
`;
export const SubContent = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 16px;
  color: #e2e4e4;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconContent = styled.div`
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  color: #e2e4e4;
  flex-direction: row;
`;

export const CartBottom = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
`;
