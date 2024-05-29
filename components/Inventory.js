import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText, Box, Container } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Inventory = () => {
  const [inventory, setInventory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get('/api/v1/vending/inventory');
        setInventory(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching inventory:', error);
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ p: 4, backgroundColor: 'background.paper', borderRadius: 4, boxShadow: 1 }}>
      <Typography variant="h4" gutterBottom>
        <LocalMallIcon sx={{ mr: 2 }} /> Inventory
      </Typography>
      {loading ? (
        <Typography variant="body1">Loading inventory...</Typography>
      ) : (
        <List>
          {Object.entries(inventory).map(([item, quantity]) => (
            <ListItem key={item} divider>
              <ListItemText primary={item} secondary={`Quantity: ${quantity}`} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Inventory;
