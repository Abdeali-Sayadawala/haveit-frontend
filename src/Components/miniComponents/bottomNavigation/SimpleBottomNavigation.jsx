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

  function cartOpen(event) {
    event.preventDefault();
    var backdrop = document.getElementById("modal_screen_blur");
    var number_modal = document.getElementById("number_modal");
    var num_input = document.getElementById("mobileNo");
    num_input.value = "";
    backdrop.style.display = "block";
    number_modal.classList.add("show");
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  }

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction id='nav_menu_but' label="Menu" icon={<MenuBookRoundedIcon sx={{ fontSize: 30 }} style={{ color: 'white' }} />} />
        <BottomNavigationAction id='nav_cart_but' label="Cart" onClick={cartOpen} icon={<Badge badgeContent={totalCount} color="success"><ShoppingCartRoundedIcon sx={{ fontSize: 30 }} style={{ color: 'white' }} /></Badge>} />
      </BottomNavigation>
    </Box>
  );
}
