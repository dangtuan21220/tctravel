import styled from 'styled-components';

const Styled = {
  Header: styled.div`
    .header {
      // width: 1440px;
      height: 8rem !important;
      margin: 0 auto;
      margin-left: auto;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      z-index: 1000;
      background-color: rgba(0, 0, 0, 0.1);
      .logo {
        display: flex;
        align-self: center;
        /* padding-left: 25px; */
        a {
          color: ${({ theme }) => theme.neutral_white};
        }
      }
      .login {
        .ant-btn {
          background: transparent;
          height: 4rem;
          width: 100%;
        }
        .ant-btn span {
          font-size: 1.6rem;
          line-height: 2.4rem;
          font-weight: 600;
          color: ${({ theme }) => theme.neutral_white};
          &:hover {
            color: ${({ theme }) => theme.primary_700} !important;
          }
        }
      }
      .ant-menu {
        background: transparent;
      }
      .ant-menu-horizontal {
        display: flex;
        align-items: center;
        border-bottom: 0;
        height: 100%;
        justify-content: end;
        .ant-menu-item {
          vertical-align: baseline;
          border-bottom: 0;
          a {
            font-size: 1.6rem;
            line-height: 2.4rem;
            color: ${({ theme }) => theme.neutral_white};
            width: 10rem;
            font-weight: 600;
          }
          &:after {
            border-bottom: 0;
          }
        }
        .ant-menu-item-selected {
          a {
            color: ${({ theme }) => theme.primary_700} !important;
            font-weight: 600;
          }
          &:hover {
            border: 0;
          }
          &:after {
            border: 0;
          }
        }
        .ant-menu-item-selected.console {
          a {
            color: ${({ theme }) => theme.neutral_white} !important;
            font-weight: 400;
          }
        }
        .ant-menu-item-active {
          color: ${({ theme }) => theme.primary_700} !important;
          border-bottom: 0;
          &:hover {
            border-bottom: 0;
            font-weight: 600;
          }
          &:after {
            border-bottom: 0;
          }
          a {
            color: ${({ theme }) => theme.primary_700};
          }
        }
        .ant-btn {
          background-color: ${({ theme }) => theme.primary_600};
          width: 11rem;
          height: 4.8rem;
          border: 0;
          a {
            color: ${({ theme }) => theme.neutral_white};
            font-size: 1.6rem;
            &:hover {
              color: ${({ theme }) => theme.neutral_white};
            }
          }
          &:hover {
            background-color: ${({ theme }) => theme.primary_700};
            border: 0;
          }
        }
      }
      .menu-right {
        height: 100%;
        display: flex;
        align-items: center;
        .anticon svg {
          font-size: 2.3rem;
        }
      }
    }
  `,
};
export default Styled;
