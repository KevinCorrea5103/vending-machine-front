import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vending Machine
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <main>{children}</main>
      </Container>
      <Box
        sx={{
          py: 2,
          mt: 4,
          backgroundColor: 'background.paper',
          textAlign: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          &copy; 2023 Vending Machine. Dev Kevin Correa.
        </Typography>
      </Box>
    </div>
  );
};

export default Layout;
