import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#39B5FF",
    '&:hover': {
      backgroundColor: "#339ad8",
    },
  }));

const textFieldTheme = createTheme({
    palette: {
        blue: {
            main: '#39B5FF'
        },
    }
});

export {
    ColorButton,
    textFieldTheme
}