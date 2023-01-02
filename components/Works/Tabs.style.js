import styled from "styled-components";

export const TabsWrapper = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 2px solid #808d9e;
  padding-top: 80px;
  background-color: #e0e5f4;
  z-index: 5;

  button {
    position: relative;
    top: 2px;
    display: flex;
    align-items: center;
    background-color: #cbd5df;
    border: 2px solid #808d9e;
    color: #808d9e;
    padding: 6px 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-left: 4px;
    cursor: pointer;
    font-size: 14px;

    svg {
      margin-right: 5px;
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
`;