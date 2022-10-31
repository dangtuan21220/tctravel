import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    margin-top: 8rem;
    .ant-breadcrumb {
      margin-top: 2rem;
      .anticon svg {
        margin-top: -0.7rem;
      }
    }
    .title {
      margin-top: 3rem;
      margin-bottom: 2rem;
      h4 {
        color: ${({ theme }) => theme.primary_700};
      }
    }
    .list-collection {
      margin-bottom: 5rem;
      img {
        width: 100%;
        object-fit: cover;
        height: 25rem;
      }
      .anticon svg {
        margin-top: -0.7rem;
      }
    }
    .ant-card {
      .ant-card-meta-title {
        color: ${({ theme }) => theme.primary_700};
        font-size: 1.6rem;
      }
    }
  `,
};

export default Styled;
