import React from 'react';

import { Container } from './styles';

import { Navbar } from '~/components/Navbar';

function LandingPage() {
  return (
    <Container>
      <Navbar />
      <h1>LandingPage</h1>
    </Container>
  );
}

export default LandingPage;
