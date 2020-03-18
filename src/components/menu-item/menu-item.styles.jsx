import styled from "styled-components";

export const MenutItemContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 12px;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  &:last-child {
    margin-bottom: 56px;
  }
`;

export const TitleContainer = styled.span`
  width: 100%;
  margin-bottom: 0;
  font-weight: bold;
  font-size: 14px;
  padding-left: 16px;
`;

export const Author = styled.span`
  width: 100%;
  margin-bottom: 24px;
  font-size: 10px;
  padding-left: 16px;
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 71vw;
  margin-bottom: 8px;
  background-size: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`;

export const ItemFoorterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const PriceContainer = styled.span`
  width: 10%;
  font-weight: bold;
  padding-left: 8px;
  font-size: 14px;
`;

export const Buttonitem = styled.button`
  border: none;
  background-color: #f9423a;
  border-radius: 5px;
  color: #f1f1f2;
  width: 70px;
  height: 35px;
  margin-right: 10px;
  padding-left: 18px;
  cursor: pointer;
  display: flex;
`;
