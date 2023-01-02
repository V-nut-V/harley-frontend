import styled from "styled-components";
import colors from "../../config/colors"

export const HeroWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 600px;
  max-height: 1200px;
  height: 100vh;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: 100%;
    grid-template-columns: 1fr;
    align-items: flex-end;
    
    .content {
      position: relative;
      width: 90%;
      margin: 0 auto;
      z-index: 2;
      padding-bottom: 80px;

      p {
        max-width: 350px;
      }
    }

    .content + div {
      position: absolute!important;
      z-index: 1;
      top: -10%;
    }
  }

  .content {
    padding-top: 50px;
    
    h1 {
      position: relative;
      color: ${colors.black};
      font-size: 60px;
      max-width: 150px;
      line-height: 100%;
      margin-bottom: 10px;
    }

    p {
      color: ${colors.gray};
    }

    button {
      display: flex;
      align-items: center;
      background-color: ${colors.main};
      color: white;
      border: 0;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 16px;
      font-family: inherit;
      font-weight: 500;
      letter-spacing: 1px;
      margin-top: 10px;
      box-shadow: 1px 2px 4px rgba(0,0,0,0.3);
      cursor: pointer;

      svg {
        margin-left: 5px;
      }
    }
  }

  .canvas {
    background-color: lightgray;
    width: 100%;
    height: 100%;
  }
`;