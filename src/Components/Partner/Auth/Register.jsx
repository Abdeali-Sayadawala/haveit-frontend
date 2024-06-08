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

import { ColorButton, textFieldTheme } from '../helpers/CommonVars';
import loaderInfinity from '../../Assets/infinity_white.svg';
import './auth.css';

import ApiManager from '../../../ApiManager/ApiManager';
import Notification from '../../../Notification/Notification';


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

    const registerValidate = () => {
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
        if (firstName.trim() === ''){
            validate = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, first_name: { 'error': true, 'message': 'Please enter First name.'} }
            });
        }
        if (lastName.trim() === ''){
            validate = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, last_name: { 'error': true, 'message': 'Please enter Last name.'} }
            });
        }
        if (password === cnfPassword) {
            if (password.trim() === ''){
                validate = false;
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, password: { 'error': true, 'message': 'Please enter password.'} }
                });
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, cnf_password: { 'error': true, 'message': 'Please enter confirm password.'} }
                });
            }
            else if (!password.match(/[a-z]/g)){
                validate = false;
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, password: { 'error': true, 'message': 'Password should contain one lowercase letter.'} }
                });
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, cnf_password: { 'error': true, 'message': 'Password should contain one lowercase letter.'} }
                });
            }
            else if (!password.match(/[A-Z]/g)){
                validate = false;
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, password: { 'error': true, 'message': 'Password should contain one uppercase letter'} }
                });
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, cnf_password: { 'error': true, 'message': 'Password should contain one uppercase letter'} }
                });
            }
            else if (!password.match(/[0-9]/g)){
                validate = false;
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, password: { 'error': true, 'message': 'Password should contain one number'} }
                });
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, cnf_password: { 'error': true, 'message': 'Password should contain one number'} }
                });
            }
            else if (password.length < 8){
                validate = false;
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, password: { 'error': true, 'message': 'Password length should atleast be 8.'} }
                });
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, cnf_password: { 'error': true, 'message': 'Password length should atleast be 8.'} }
                });
            }
            else if (!password.match(/[^A-Za-z0-9]/)){
                validate = false;
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, password: { 'error': true, 'message': 'Password should contain one special character.'} }
                });
                setErrorState(prevErrorState => {
                    return { ...prevErrorState, cnf_password: { 'error': true, 'message': 'Password should contain one special character.'} }
                });
            }
        }else{
            validate = false;
            setErrorState(prevErrorState => {
                return { ...prevErrorState, password: { 'error': true, 'message': 'New Password and Confirm Password do not match.'} }
            });
            setErrorState(prevErrorState => {
                return { ...prevErrorState, cnf_password: { 'error': true, 'message': 'New Password and Confirm Password do not match.'} }
            });
        }

        return validate;
    }

    const registerUser = async () => {
        setErrorState(initialErrorState);
        if (registerValidate() && !loader){
            setLoader(true);
            var params = {
                email: email,
                first_name: firstName,
                last_name: lastName,
                password: password
            }

            await ApiManager.register(params)
            .then((response) => {
                // 1. check response.ok
                if (response.ok) {
                    if (response.status === 204) {
                        return {}
                    }
                    return response.json();
                }
                return Promise.reject(response); // 2. reject instead of throw
              })
            .then((result) => {
                setLoader(false);
                navigate('/partner/login')
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
    }

    const navigateLogin = () => {
        navigate('/partner/login');
    }

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
                                    id="last_name" 
                                    label="Last Name"  
                                    placeholder='Last Name' 
                                    color='blue'
                                    helperText={errorState.last_name.message} 
                                    error={errorState.last_name.error}
                                    value={lastName}
                                    onChange={(event) => {
                                        setLastName(event.target.value);
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
                                            onClick={() => {setShowPassword(!showPassword)}}
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
                                    type={showCnfPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => {setShowCnfPassword(!showCnfPassword)}}
                                            edge="end"
                                            >
                                            {showCnfPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    color='blue'
                                    label="cnfPassword"
                                    error={errorState.password.error}
                                    value={cnfPassword}
                                    onChange={(event) => {
                                        setCnfPassword(event.target.value);
                                        }} 
                                />
                                <FormHelperText error>
                                    {errorState.password.message}
                                </FormHelperText>
                            </FormControl>
                        </ThemeProvider>
                    </div>
                    <div className='full_section flex'>
                        <ColorButton onClick={registerUser} className='login_button' sx={{ borderRadius: "5px", fontSize: "20px" }} variant="contained"><img style={{ display: loader?'block':'none', width: '35px', height: '35px' }} src={loaderInfinity} alt='Loader' /><span >Register</span></ColorButton>
                    </div>
                    <div className='full_section flex'>
                        <button onClick={navigateLogin} className='link_btn'>Already have an account ?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerRegister