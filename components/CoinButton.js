import React from 'react';
import axios from 'axios';
import { Button, CircularProgress } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const CoinButton = ({ setCoins }) => {
  const [loading, setLoading] = React.useState(false);

  const insertCoin = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/v1/vending/insert-coin');
      setCoins(response.data.coins);
    } catch (error) {
      console.error('Error inserting coin:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={insertCoin}
      disabled={loading}
      startIcon={<MonetizationOnIcon />}
      sx={{ m: 2 }}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : 'Insert Coin'}
    </Button>
  );
};

export default CoinButton;
