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
        .ant-btn {
          font-weight: 600;
          font-style: italic;
          font-family: 'Courier New', Courier, monospace;
        }
        .anticon svg {
          margin-top: -5px;
        }
      }
    }

    .header {
      background-color: rgba(0, 0, 0, 0.1) !important;
      box-shadow: none;
      .logo {
        a {
          color: ${({ theme }) => theme.neutral_white} !important;
        }
      }
      .login {
        .ant-btn span {
          color: white;
        }
        .user {
          h4 {
            color: white;
          }
          .anticon svg {
            color: white;
          }
        }
      }
      .ant-menu-horizontal {
        .ant-menu-item {
          a {
            color: white;
          }
        }
        .ant-menu-item-selected {
          a {
            color: ${({ theme }) => theme.secondary_600} !important;
          }
        }
        .ant-menu-item-active {
          a {
            color: ${({ theme }) => theme.secondary_600} !important;
          }
        }
      }
    }
  `,
};
export default Styled;
