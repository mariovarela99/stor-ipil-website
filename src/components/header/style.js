import styled from "styled-components";

export const HeaderTag = styled.header`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
`;

export const SubHeader = styled.div`
  background: #e8e8e8;
  width: 100%;
  height: 30px;
  padding: 5px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #4d4d4d;
    }

    a {
      font-size: 12px;
      line-height: 14px;
      color: #4d4d4d;
    }

    span.line {
      height: 20px;
      width: 2px;
      background: #232323;
      margin: 0 10px;
    }
  }
`;

export const MainHeader = styled.div`
  display: flex;
  padding: 15px 25px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  picture {
    width: 24%;
    display: flex;
  }

  nav {
    display: flex;

    ul {
      display: flex;
      list-style: none;

      li {
        display: flex;
        a {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          padding: 7px 15px;

          color: #000000;
        }
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 24%;

    background: transparent;
    border: 1px solid #ffa500;
    border-radius: 8px;
    height: 36px;
    padding: 15px 20px;

    button {
      border: none;
      background: none;

      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      color: #ffa500;
      a{
        color: #ffa500;
        text-transform: uppercase;
      }
    }
  }
`;

export const DownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  width: 100%;

  select {
    width: 24%;
    height: 36px;
    border: 1px solid #ffa500;
    border-radius: 14px;
    background: transparent;
    padding: 10px 15px;
  }

  input {
    width: 48%;
    background: #f0f0f0;
    border-radius: 12px;
    height: 36px;
    padding: 12px 25px;
    border: none;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }

  div {
    width: 24%;
    height: 36px;
    background: #ffa500;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 10px;

    a {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;

      display: flex;
      align-items: center;
      justify-content: center;

      span {
        text-transform: uppercase;
        margin: 10px;
      }
    }
  }
`;
