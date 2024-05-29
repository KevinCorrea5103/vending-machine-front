import React from 'react';
import axios from 'axios';
import { Button, CircularProgress } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const ItemButton = ({ item, setCoins, setMessage }) => {
  const [loading, setLoading] = React.useState(false);

  const purchaseItem = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`/api/v1/vending/purchase/${item}`);
      if (response.data.error) {
        setMessage(response.data.error);
      } else {
        setMessage(`Purchased ${response.data.item}`);
      }
      setCoins(response.data.returnedCoins);
    } catch (error) {
      setMessage('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={purchaseItem}
      disabled={loading}
      startIcon={<MonetizationOnIcon />}
      sx={{ m: 2 }}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : `Buy ${item}`}
    </Button>
  );
};

export default ItemButton;
