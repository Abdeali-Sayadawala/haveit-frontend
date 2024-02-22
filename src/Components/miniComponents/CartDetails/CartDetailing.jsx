import * as React from 'react';
import './CartDetailing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<FontAwesomeIcon icon="fa-solid fa-cart-shopping" />} label="Item One"/>
          <Tab label="Item Two"/>
        </Tabs>
      </Box>
  );
}

