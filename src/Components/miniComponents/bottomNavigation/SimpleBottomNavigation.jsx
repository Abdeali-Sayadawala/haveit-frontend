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

  const [totalCount, setCount] = React.useState(0);

  React.useEffect(() => {
    if (localStorage.getItem('cartItems') === null) {
      setCount(0);
    }else{
      setCount(JSON.parse(localStorage.getItem('cartItems')).totalCount);
    }
  }, []);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Menu" icon={<MenuBookRoundedIcon sx={{ fontSize: 30 }} style={{ color: 'white' }} />} />
        <BottomNavigationAction label="Cart" icon={<Badge badgeContent={totalCount} color="success"><ShoppingCartRoundedIcon sx={{ fontSize: 30 }} style={{ color: 'white' }} /></Badge>} />
      </BottomNavigation>
    </Box>
  );
}
