import React from 'react';
import { Container, Box } from '@mui/material';
import BlogList from '../components/BlogList';

function HomePage() {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <BlogList />
      </Container>
    </Box>
  );
}

export default HomePage;