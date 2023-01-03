import styled, {keyframes} from "styled-components";
import hexRgb from "hex-rgb";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(105%);
  }

  to {
    opacity: 1;
    transform: translateY(100%);
  }
`;

export const BlobWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 300px;
  
  .container {
    position: relative;
    display: flex;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    z-index: -1;

    svg#blobSvg {
      position: absolute;
      top: -250px;
      left: -320px;
      width: 500px;
      height: 500px;
      transform: scale(2);
    }
  }
`;

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .container {
    position: relative;
    display: flex;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    z-index: 2;

    .card {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 20px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      & > img {
        border-radius: 12px;
        cursor: pointer;
      }

      .social-links {
        display: flex;
        margin-left: 24px;
        margin-right: 10px;

        a:not(:last-child) {
          margin-right: 20px;
        }
      }
    }

    .card-detail {
      position: absolute;
      bottom: -10px;
      left: 0;
      transform: translateY(100%);
      margin-top: 10px;
      width: 100%;
      padding: 15px;
      border-radius: 20px;
      opacity: 0;
      animation: ${slideUp} 0.2s ease-out forwards;

      img {
        width: 100%;
        border-radius: 14px;
      }

      h3,
      h4 {
        color: white;
        filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.4));
      }

      h3 {
        margin-top: 10px;
        padding: 0 5px;
        font-size: 28px;
      }

      h4 {
        padding: 0 5px;
        margin: 5px 0;
      }
    }
  }
`;

export const SocialLink = styled.div`
  position: relative;

  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(1px 2px 3px rgb(0 0 0 / 0.3));
  }

  &:hover {
    path {
      fill: ${(props) => props.color || "black"};
    }

    svg {
      filter: drop-shadow(1px 2px 3px rgb(${(props) => {
        const color = hexRgb(props.color);
        return color.red + " " + color.green + " " + color.blue
      }} / 0.5));
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 10px;
      background-color: ${(props) => props.color || "black"};
      filter: drop-shadow(1px 1px 2px rgb(${(props) => {
        const color = hexRgb(props.color);
        return color.red + " " + color.green + " " + color.blue
      }} / 0.5));
    }
  }
`;