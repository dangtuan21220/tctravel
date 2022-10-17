import Header from 'app/components/Header/Header';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import IMAGE from 'app/assets/images/ha-noi.jpg';
import Styled from './styled';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="smt" />
      </Helmet>
      <Header />
      <Styled.Container>
        <img src={IMAGE} alt="img" />
        <img src={IMAGE} alt="img" />
      </Styled.Container>
    </>
  );
}
