import Header from 'app/components/Header/Header';
import { getToken } from './common';
import styled from 'styled-components';

const Styled = {
  Container: styled.div`
    margin-top: 8rem;
    height: 60vh;
    .text {
      text-align: center;
      padding-top: 10%;
    }
  `,
};

const PrivateRoute = ({ children }) => {
  return getToken() ? (
    children
  ) : (
    <Styled.Container>
      <Header />
      <div className='text'>Đăng nhập để sủ dụng dịch vụ này!</div>
    </Styled.Container>
  );
};

export default PrivateRoute;
