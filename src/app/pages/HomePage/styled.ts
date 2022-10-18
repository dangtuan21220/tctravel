import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    width: 100%;
    .image {
      height: 98vh;
      width: 100vw;
      position: relative;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: 1;
      }
      .btn-discover {
        position: absolute;
        top: 65%;
        left: 50%;
        z-index: 100;
        transform: translateX(-50%);
        .anticon svg {
          margin-top: -5px;
        }
      }
    }
  `,
};
export default Styled;
