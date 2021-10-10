import styled from '@emotion/styled';
export const Button = styled.button`
  padding: 8px 16px;
  margin-top: 15px;
  margin-bottom: 40px;
  border-radius: 2px;
  background-color: #4c0570;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  align-items: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 5px 6px 9px rgb(85, 42, 85);
  &:hover,
  &:focus {
    background-color: #a019e4;
    transform: scale(1.25);
  }
`;
