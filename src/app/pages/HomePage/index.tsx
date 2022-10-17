import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="smt" />
      </Helmet>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  );
}
