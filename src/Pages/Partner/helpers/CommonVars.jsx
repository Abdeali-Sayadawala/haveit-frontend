import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#39B5FF",
    '&:hover': {
      backgroundColor: "#339ad8"
    },
}));

const ColorButtonOutline = styled(Button)(({ theme }) => ({
    backgroundColor: "white",
    borderColor: "#39B5FF",
    color: "#39B5FF",
    '&:hover': {
      backgroundColor: "#39B5FF",
      borderColor: "#39B5FF",
      color: "white",
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
    ColorButtonOutline,
    textFieldTheme
}