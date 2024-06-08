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
import loaderInfinity from '../../Assets/infinity_white.svg';
import './auth.css';


const PartnerRegister = () => {

    var initialErrorState = {
        first_name: {
            error: false,
            message: '',
        },
        last_name: {
            error: false,
            message: '',
        },
        email: {
            error: false,
            message: '',
        },
        password: {
            error: false,
            message: '',
        },
        cnf_password: {
            error: false,
            message: '',
        }
    };

    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [serverError, setServerError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [cnfPassword, setCnfPassword] = useState('');
    const [showCnfPassword, setShowCnfPassword] = useState(false);
    const [errorState, setErrorState] = useState(initialErrorState);

    return (
        <div className='login_background'>
            <div className='login_wrapper'>
                <div className='login_header'>Register</div>
                <div className='login_body'>
                    <span style={{ color:"red", textAlign:'center' }} >{serverError}</span>
                    <div className='full_section'>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='txt_input' variant="outlined" >
                                <TextField 
                                    id="first_name" 
                                    label="First Name"  
                                    placeholder='First Name' 
                                    color='blue'
                                    helperText={errorState.first_name.message} 
                                    error={errorState.first_name.error}
                                    value={firstName}
                                    onChange={(event) => {
                                        setFirstName(event.target.value);
                                        }} 
                                />
                            </FormControl>
                        </ThemeProvider>
                    </div>
                    <div className='full_section'>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='txt_input' variant="outlined" >
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
                            <FormControl className='txt_input' variant="outlined" >
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
                            <FormControl className='txt_input' variant="outlined" color='blue'>
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
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='txt_input' variant="outlined" color='blue'>
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
                    <div className='full_section flex'>
                        <ColorButton onClick={loginUser} className='login_button' sx={{ borderRadius: "5px", fontSize: "20px" }} variant="contained"><img style={{ display: loader?'block':'none', width: '35px', height: '35px' }} src={loaderInfinity} alt='Loader' /><span >Register</span></ColorButton>
                    </div>
                    <div className='full_section flex'>
                        <button onClick={navigateCreate} className='link_btn'>Already have an account ?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerRegister