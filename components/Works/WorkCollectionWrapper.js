import styled from "styled-components";

export const WorkCollectionWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 40px;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  .glass {
    padding: 14px;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.2s ease-out;
    
    &:hover {
      box-shadow: 12px 16px 16px rgba(0, 0, 0, 0.08);
      transform: scale(1.05);
    }

    .image-wrapper {
      position: relative;
      width: 100%;
      padding-bottom: 70%;
      border-radius: 8px;
      overflow: hidden;
      background-color: white;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .bottom-info {
      margin-top: 10px;
      display: flex;
      align-items: center;

      img {
        width: 40px;
        border-radius: 40px;
      }

      h4 {
        margin: 0 10px;
        color: #808d9e;
      }

      h6 {
        margin-left: auto;
        color: #808d9e;
        font-size: 14px;
      }
    }
  }
`;