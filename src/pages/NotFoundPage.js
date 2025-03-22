import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 5,
            textAlign: 'center',
            backgroundColor: 'transparent'
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: '8rem',
              fontWeight: 700,
              color: 'primary.main',
              mb: 2
            }}
          >
            404
          </Typography>
          
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 500,
              mb: 3
            }}
          >
            Page Not Found
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            The page you're looking for doesn't exist or has been moved.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              px: 4,
              py: 1.5
            }}
          >
            Back to Home
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default NotFoundPage;