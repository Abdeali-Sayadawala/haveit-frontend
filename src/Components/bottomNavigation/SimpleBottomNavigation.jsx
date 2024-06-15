import * as React from 'react';
import './SimpleBottomNavigation.css';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Badge from '@mui/material/Badge';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export default function SimpleBottomNavigation() {
  const navigate = useNavigate();

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
    if (localStorage.getItem("authentication") === 'true'){
      navigate('/checkout');
    }else{
      sessionStorage.setItem('checkout', true);
      var backdrop = document.getElementById("modal_screen_blur");
      var number_modal = document.getElementById("number_modal");
      var num_input = document.getElementById("mobileNo");
      num_input.value = "";
      num_input.select();
      backdrop.style.display = "block";
      number_modal.classList.add("show");
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    }
  }

  return (
    <Box sx={{ width: 500 }} className='sbn_main'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

        className='sbn_root'
      >
        <BottomNavigationAction className='sbn_button' id='nav_menu_but' label="Menu" icon={<MenuBookRoundedIcon sx={{ fontSize: 30 }} style={{ color: 'white' }} />} />
        <BottomNavigationAction className='sbn_button' id='nav_cart_but' label="Cart" onClick={cartOpen} icon={<Badge badgeContent={totalCount} color="success"><ShoppingCartRoundedIcon sx={{ fontSize: 30 }} style={{ color: 'white' }} /></Badge>} />
      </BottomNavigation>
    </Box>
  );
}
