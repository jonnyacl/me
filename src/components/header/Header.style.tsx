import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  text-align: center;
  a {
    img {
      width: 40px;
      margin: 10px;
      transition: all 0.17s ease-in-out;
    }

    img:hover {
      transform: scale(1.3);
    }
  }
  span {
    font-size: 30px;
    padding: 10px;
    transition: all 0.17s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.3);
      font-size: 50px;
    }
  }
`;

export const ScrollingHeader = styled.div<{ isScrolling: boolean }>(
  ({ isScrolling }) => {
    if (isScrolling) {
      return css`
        text-align: center;
        padding: 10px 10px 0px 10px;
        border-bottom: 1px;
        transition: all 0.3s ease-in-out;
        transform: scale(0.8);
      `;
    }
    return css`
      text-align: center;
      padding: 10px 10px 0px 10px;
      border-bottom: 1px;
      transition: all 0.3s ease-in-out;
    `;
  }
);
