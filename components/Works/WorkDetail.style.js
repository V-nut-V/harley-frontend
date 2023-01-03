import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-30%);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const WorkDetailWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 11;
  max-width: 1200px;
  width: 90%;
  max-height: 80vh;
  padding: 20px;
  overflow-y: scroll;
  opacity: 0;
  animation: ${slideUp} 0.2s ease-out forwards;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: white;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    cursor: pointer;
  }

  .top-bar {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
      width: 44px;
      height: 44px;
      border-radius: 40px;
      margin-right: 15px;
    }

    h3 {
      color: #2d2d2d;
      font-weight: bold;
    }
  }

  .carousel-slider {
    position: relative;
    border-radius: 10px;
    overflow: hidden;

    button {
      position: absolute;
      width: 36px;
      height: 36px;
      justify-content: center;
      align-items: center;
      border-radius: 40px;
      font-size: 22px;
      color: #808d9e;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #2d2d2d;

      &:hover {
        color: #3367fd;
      }

      &.prev {
        left: 10px;
      }

      &.next {
        right: 10px;
      }

      svg {
        position: relative;
        top: 3px;
      }
    }

    .img-wrapper {
      position: relative;
      width: 100%;
      padding-bottom: 70%;
      background-color: white;

      img {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: 35% 65%;
    margin-top: 20px;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 100%;
    }

    .icon-wrapper {
      width: 40px;
      height: 40px;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
      margin-bottom: 10px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;

      span.tag {
        display: block;
        padding: 5px 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        background-color: white;
      }
    }

    .note {
      background-color: white;
      padding: 10px;

      a {
        color: #3367fd;
        font-weight: bold;
        text-decoration: none;
      }

      ul {
        li {
          position: relative;
          padding-left: 12px;

          &::before {
            content: "";
            position: absolute;
            display: block;
            width: 5px;
            height: 5px;
            background-color: #2d2d2d;
            border-radius: 5px;
            top: 50%;
            transform: translateY(-50%);
            left: 0px;
          }
        }
      }
    }
  }
`;
