import styled from "styled-components";

export const MusicPlayBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 30px;

  path:last-child {
    filter: drop-shadow(1px 2px 2px rgb(0 0 0 / 0.3));
  }

  &:hover path:last-child {
    fill: #3367fd;
  }

  audio {
    display: none;
  }
`;