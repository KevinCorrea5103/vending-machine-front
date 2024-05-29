import React, { useState } from 'react';
import Layout from '../components/Layout';
import CoinButton from '../components/CoinButton';
import Inventory from '../components/Inventory';
import ItemButton from '../components/ItemButton';
import { Button, Typography, Container, Box } from '@mui/material';

const Home = () => {
  const [coins, setCoins] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <Layout>
      <Container maxWidth="md" sx={{ p: 4, backgroundColor: 'gray.50', borderRadius: 1, boxShadow: 1 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Coins Inserted: {coins}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CoinButton setCoins={setCoins} />
            <Button variant="contained" color="primary" onClick={() => setCoins(0)}>
              Return Coins
            </Button>
          </Box>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Items
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <ItemButton item="coke" setCoins={setCoins} setMessage={setMessage} />
            <ItemButton item="pepsi" setCoins={setCoins} setMessage={setMessage} />
            <ItemButton item="sprite" setCoins={setCoins} setMessage={setMessage} />
          </Box>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Message: {message}
          </Typography>
        </Box>
        <Inventory />
      </Container>
    </Layout>
  );
};

export default Home;
