import styled from "styled-components";

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 55px auto 30px;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    color: #484848;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 15px 10px;

    > button {
      border: none;
      background: none;
      margin: 0 15px;
    }

    ul {
      display: flex;
    }
  }
`;
