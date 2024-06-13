import React from 'react';
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Tooltip from '@mui/material/Tooltip';

import { ColorButton, textFieldTheme } from '../helpers/CommonVars';
import loaderInfinity from '../../Assets/infinity_white.svg';

import './ResetPassword.css';
import ApiManager from '../../../Services/ApiManager/ApiManager';

const ResetPassword = () => {

    var initialErrorState = {
        new_pass: {
            error: false,
            message: '',
        },
        con_pass: {
            error: false,
            message: '',
        }
    };

    const tooltipText = <div style={{ fontSize: '15px' }}>
        Password must contain the following: 
        <br />
        Minimum 8 characters
        <br />
        A special character
        <br />
        A Number
        <br />
        A lowercase letter
        <br />
        An uppercase letter
    </div>
    

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    const [loader, setLoader] = useState(false);
    const [serverError, setServerError] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);
    const [newPass, setNewPass] = useState('');
    const [conPass, setConPass] = useState('');
    const [errorState, setErrorState] = useState(initialErrorState);

    const resetValidation = () => {
        var validate = true;
        if (newPass === conPass) {
            if (!newPass.match(/[a-z]/g)){
                setServerError('Password should contain one lowercase letter.');
                validate = false;
            }
            if (!newPass.match(/[A-Z]/g)){
                setServerError('Password should contain one uppercase letter.');
                validate = false;
            }
            if (!newPass.match(/[0-9]/g)){
                setServerError('Password should contain one number.');
                validate = false;
            }
            if (newPass.length < 8){
                setServerError('Password length should atleast be 8.');
                validate = false;
            }
            if (!newPass.match(/[^A-Za-z0-9]/)){
                setServerError('Password should contain one special character.');
                validate = false;
            }
        }else{
            setServerError('New Password and Confirm Password do not match.')
            validate = false;
        }
        return validate;
    }

    const openCompleteModal = () => {
        document.getElementsByTagName('body')[0].classList.toggle('modal-open');
        document.getElementById('rp_completed').classList.add('show');
        document.getElementById('rp_completed_content').classList.add('show');
    };

    const resetPass = async () => {
        setServerError('');
        setErrorState(initialErrorState);
        if (resetValidation() && !loader){
            setLoader(true);
            const query = {
                token: token
            }
            const params = {
                password: newPass
            };
            
            await ApiManager.reset_password(query, params)
            .then((response) => {
                // 1. check response.ok
                if (response.ok) {
                    if (response.status === 204) {
                        return {}
                    }
                    return response;
                }
                return Promise.reject(response); // 2. reject instead of throw
              })
            .then((response) => {
                // 1. check response.ok
                openCompleteModal();
                setTimeout(() => {
                    document.getElementsByTagName('body')[0].classList.remove('modal-open');
                    document.getElementById('rp_completed').classList.remove('show');
                    document.getElementById('rp_completed_content').classList.remove('show');
                    navigate('/admin');
                }, 2000);
              })
            .catch((response) => {
                console.log(response.status, response.statusText);
                setLoader(false);
                // 3. get error messages, if any
                response.json().then((result) => {
                    setServerError(result.message);
                })
            });
        }
    };

    const LinkSentModal = () => {
        return (
            <div className='modal' id='rp_completed'>
                <div className='modal_content reset_password_modal' id='rp_completed_content'>
                    <div className='modal_body' style={{ height: '70%' }}>
                        <div className='success_icon_wrapper'>
                            <CheckCircleOutlineIcon sx = {{ color : "#39B5FF", fontSize: '75px' }} />
                        </div>
                        <span className='mail_sent_text'>
                            Password reset successful.
                        </span>
                    </div>
                </div>
            </div>
        )
    };

    return(
        <div className='reset_pass_background'>
            <div className='reset_pass_wrapper'>
                <div className='reset_pass_header'>Reset Password <Tooltip title={tooltipText} arrow placement="bottom"><HelpOutlineIcon sx={{ color: 'rgb(0, 0, 0, 0.5)' }} /></Tooltip></div>
                <div className='reset_pass_body'>
                    <span style={{ color:"red", textAlign:'center' }} >{serverError}</span>
                    <div className='full_section'>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='login_input' variant="outlined" color='blue'>
                                <InputLabel htmlFor="outlined-adornment-password" error={ errorState.new_pass.error?true:false }>New Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showNewPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowNewPassword((show) => !show)}
                                            edge="end"
                                            >
                                            {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    color='blue'
                                    label="New Password"
                                    error={errorState.new_pass.error}
                                    value={newPass}
                                    onChange={(event) => {
                                        setNewPass(event.target.value);
                                        }} 
                                />
                                <FormHelperText error>
                                    {errorState.new_pass.message}
                                </FormHelperText>
                            </FormControl>
                        </ThemeProvider>
                    </div>
                    <div className='full_section'>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='login_input' variant="outlined" color='blue'>
                                <InputLabel htmlFor="outlined-adornment-password" error={ errorState.con_pass.error?true:false }>Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showConPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowConPassword((show) => !show)}
                                            edge="end"
                                            >
                                            {showConPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    color='blue'
                                    label="Password"
                                    error={errorState.con_pass.error}
                                    value={conPass}
                                    onChange={(event) => {
                                        setConPass(event.target.value);
                                        }} 
                                />
                                <FormHelperText error>
                                    {errorState.con_pass.message}
                                </FormHelperText>
                            </FormControl>
                        </ThemeProvider>
                    </div>
                    <div className='full_section flex'>
                        <ColorButton onClick={resetPass} className='login_button' sx={{ borderRadius: "5px", fontSize: "20px" }} variant="contained"><img style={{ display: loader?'block':'none', width: '35px', height: '35px' }} src={loaderInfinity} alt='Loader' /><span >Reset</span></ColorButton>
                    </div>
                </div>
            </div>
            <LinkSentModal />
        </div>
    )
};

export default ResetPassword