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
import ApiManager from '../../../ApiManager/ApiManager';
import Notification from '../../../Notification/Notification';


const PartnerLogin = () => {

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
    const [loader, setLoader] = useState(false);
    const [serverError, setServerError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorState, setErrorState] = useState(initialErrorState);
    const [showNotify, setShowNotify] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationType, setNotificationType] = useState('');

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

    const setAuthentication = () => {
        localStorage.setItem("authentication", true);
    };

    const closeNotification = () => { 
        setShowNotify(false);
    }

    const sendNotification = (message, type='success') => {
        setNotificationMessage(message)
        setNotificationType(type)
        setShowNotify(true);
    }

    const loginUser = async () => {
        setErrorState(initialErrorState);
        if (loginValidate() && !loader) {
            setLoader(true);
            var params = {
                email: email,
                password: password
            };
            
            await ApiManager.login(params)
            .then((response) => {
                // 1. check response.ok
                if (response.ok) {
                  return response;
                }
                return Promise.reject(response); // 2. reject instead of throw
              })
            .then((result) => {
                localStorage.setItem("access-token", JSON.stringify(result.tokens));
                setAuthentication();
                navigate('/partner/dashboard');
            })
            .catch((response) => {
                if (response.status){
                    setLoader(false);
                    // 3. get error messages, if any
                    response.json().then((result) => {
                        sendNotification(result.message, 'error');
                        setPassword('');
                    })
                }else {
                    sendNotification("Internal Server Error", 'error');
                    setLoader(false);
                }
              });
        }
    };

    const openFPModal = () => {
        document.getElementsByTagName('body')[0].classList.toggle('modal-open');
        document.getElementById('forgot_pass_email').classList.add('show');
        document.getElementById('forgot_pass_email_content').classList.add('show');
    };

    const navigateCreate = () => {
        navigate('/partner/register');
    }

    return(
        <div className='login_background'>
            <div className='login_wrapper'>
                <div className='login_header'>Login</div>
                <div className='login_body'>
                    <span style={{ color:"red", textAlign:'center' }} >{serverError}</span>
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
                        <span className='forgot_password_span'>
                            <button onClick={openFPModal} className='link_btn'>Forgot Password ?</button>
                        </span>
                    </div>
                    <div className='full_section flex'>
                        <ColorButton onClick={loginUser} className='login_button' sx={{ borderRadius: "5px", fontSize: "20px" }} variant="contained"><img style={{ display: loader?'block':'none', width: '35px', height: '35px' }} src={loaderInfinity} alt='Loader' /><span >Login</span></ColorButton>
                    </div>
                    <div className='full_section flex'>
                        <button onClick={navigateCreate} className='link_btn'>Create Account</button>
                    </div>
                </div>
            </div>
            <ForgotPasswordModal />
            <LinkSentModal />
            <Notification show = {showNotify} message = {notificationMessage} type = {notificationType} onClose={closeNotification} />
        </div>
    )
};

export default PartnerLogin