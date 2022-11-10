import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    margin-top: 8rem;
    width: 100vw;
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
    .map-recommend {
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
    .filter {
      .filter-item {
        margin-bottom: 1.5rem;
      }
      .lable {
        padding: 8px 0;
      }
    }
    .result {
      margin-top: 2rem;
      margin-bottom: 8rem;
      .ant-table-cell {
        text-align: center;
      }
    }
    .mapboxgl-ctrl-bottom-right {
      display: none;
    }
    a.mapboxgl-ctrl-logo {
      display: none;
    }
  `,
};

export default Styled;
