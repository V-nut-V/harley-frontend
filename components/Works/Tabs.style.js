import styled from "styled-components";

export const TabsWrapper = styled.div`
  position: sticky;
  top: 0px;
  background-color: #e0e5f4;
  z-index: 5;

  .container {
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid #808d9e;
    padding-top: 80px;
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;

    button {
      position: relative;
      top: 2px;
      display: flex;
      align-items: center;
      background-color: #cbd5df;
      border: 2px solid #808d9e;
      color: #808d9e;
      padding: 8px 12px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      margin-left: 4px;
      cursor: pointer;
      font-size: 18px;

      @media only screen and (max-width: 680px) {
        font-size: 14px;
        padding: 6px 10px;
      }

      svg {
        margin-right: 5px;
        font-size: 16px;
      }

      &.active {
        color: #1890ff;
        background-color: #e0e5f4;
        border-bottom-color: #e0e5f4;
      }

      &:hover {
        color: #1890ff;
      }
    }
  }
`;
