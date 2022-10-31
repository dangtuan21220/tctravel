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
      margin-top: 2rem;
      h3 {
        color: ${({ theme }) => theme.primary_700};
      }
    }
  `,
};

export default Styled;
