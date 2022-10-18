import styled from 'styled-components';

const Styled = {
  Login: styled.div`
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 4rem;
      margin-bottom: 3rem;
      .title-logo {
        background: #f70974;
        display: inline;
        padding: 1rem 1.5rem;
        border-radius: 100%;
        .anticon svg {
          font-size: 1.8rem;
          color: white;
        }
      }
      h3 {
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
      }
    }
    .ant-btn > span {
      font-weight: 600;
    }
    .forgot {
      display: flex;
      justify-content: space-between;
      color: #140ff0;
      margin-bottom: 3rem;
      span {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  `,
};
export default Styled;
