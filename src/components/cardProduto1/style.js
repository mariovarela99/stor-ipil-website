import styled from "styled-components";

export const CardItemContainer = styled.li`
  display: flex;
  width: 33.3333%;
  max-width: 270px;
  background: #f0f0f0;
  margin: 10px;
  padding-bottom: 20px;
  border-radius: 15px;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  strong {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;

    color: #ffa500;
    padding: 5px 15px;
  }

  p {
    padding: 5px 15px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    color: #282828;
  }

  span {
    padding: 5px 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    color: #282828;
  }

  picture {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
      width: 100%;
    }

    button {
      border: none;
      background: none;
      z-index: 999;
      position: relative;
    }

    button.angleRight {
      margin-left: -75px;
    }

    button.angleLeft {
      margin-right: -75px;
    }
  }

  div {
    padding: 5px 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    button.addCart {
      background: #ffa500;
      width: 200px;
      height: 38px;
      border-radius: 8px;
      color: #ffffff;
      border: 1px solid #ffa500;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: all .3s ease;
    }
    button.addCart:hover {
      color: #ffa500;
      background: transparent;
    }

    button.addFavorites {
      background: #ffffff;
      color: #ffa500;
      width: 43px;
      height: 38px;
      border: none;
      border-radius: 5px;
    }
  }
`;
