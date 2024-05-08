import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';

import { ForgotPasswordModal, LinkSentModal } from './ForgotPasswordModal';
import { ColorButton, textFieldTheme } from '../helpers/CommonVars';
import './AdminLogin.css';


const AdminLogin = () => {

    var initialErrorState = {
        email: {
            error: false,
            message: '',
        },
        password: {
            error: false,
            message: '',
        }
    };

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorState, setErrorState] = useState(initialErrorState);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const loginValidate = () => {
        var validate = true;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            validate = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, email: { 'error': true, 'message': 'Please enter valid email address.'} }
            });
        }
        if (email.trim() === ''){
            validate = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, email: { 'error': true, 'message': 'Please enter email.'} }
            });
        }
        if (password.trim() === ''){
            validate = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, password: { 'error': true, 'message': 'Please enter password.'} }
            });
        }
        return validate;
    };

    const loginUser = () => {
        setErrorState(initialErrorState);
        if (loginValidate()) {
            navigate('/admin/dashboard');
        }
    };

    const openFPModal = () => {
        document.getElementsByTagName('body')[0].classList.toggle('modal-open');
        document.getElementById('forgot_pass_email').classList.add('show');
        document.getElementById('forgot_pass_email_content').classList.add('show');
    };

    return(
        <div className='login_background'>
            <div className='login_wrapper'>
                <div className='login_header'>Login</div>
                <div className='login_body'>
                    <div className='full_section'>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='login_input' variant="outlined" >
                                <TextField 
                                    id="email" 
                                    label="Email"  
                                    placeholder='Email' 
                                    color='blue'
                                    helperText={errorState.email.message} 
                                    error={errorState.email.error}
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                        }} 
                                />
                            </FormControl>
                        </ThemeProvider>
                    </div>
                    <div className='full_section'>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='login_input' variant="outlined" color='blue'>
                                <InputLabel htmlFor="outlined-adornment-password" error={ errorState.password.error?true:false }>Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    color='blue'
                                    label="Password"
                                    error={errorState.password.error}
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                        }} 
                                />
                                <FormHelperText error>
                                    {errorState.password.message}
                                </FormHelperText>
                            </FormControl>
                        </ThemeProvider>
                    </div>
                    <div className='full_section'>
                        <span className='forgot_password_span'>
                            <button onClick={openFPModal} className='forgot_password_btn'>Forgot Password ?</button>
                        </span>
                    </div>
                    <div className='full_section flex'>
                        <ColorButton onClick={loginUser} className='login_button' sx={{ borderRadius: "5px", fontSize: "20px" }} variant="contained">Login</ColorButton>
                    </div>
                </div>
            </div>
            <ForgotPasswordModal />
            <LinkSentModal />
        </div>
    )
};

export default AdminLogin