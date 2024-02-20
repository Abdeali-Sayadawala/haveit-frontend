import * as React from 'react';
import './SimpleBottomNavigation.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Badge from '@mui/material/Badge';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Menu" icon={<MenuBookRoundedIcon fontSize="large" style={{ color: 'white' }} />} />
        <BottomNavigationAction label="Cart" icon={<Badge badgeContent={4} color="success"><ShoppingCartRoundedIcon fontSize="large" style={{ color: 'white' }} /></Badge>} />
      </BottomNavigation>
    </Box>
  );
}
