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
      margin-top: 4rem;
      margin-bottom: 2rem;
      h4 {
        color: ${({ theme }) => theme.primary_700};
      }
    }
    .first {
      img {
        width: 100%;
        object-fit: cover;
        height: 30rem;
      }
    }
    .second {
      margin-top: 2rem;
      img {
        width: 100%;
        object-fit: cover;
        height: 24rem;
      }
    }
    .third {
      margin-top: 2rem;
      img {
        width: 100%;
        object-fit: cover;
        height: 50rem;
      }
    }
    .ant-card {
      .ant-card-meta-title {
        color: ${({ theme }) => theme.primary_700};
        font-size: 1.6rem;
      }
      .author {
        font-size: 1.3rem;
        .author-name {
          color: ${({ theme }) => theme.primary_500};
        }
      }
    }
  `,
};

export default Styled;
