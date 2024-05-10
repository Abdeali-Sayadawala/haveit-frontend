import React from 'react';
import { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { ColorButton, textFieldTheme } from '../helpers/CommonVars';

const ForgotPasswordModal = () => {

    var initialErrorState = {
        email: {
            error: false,
            message: '',
        }
    };
    const [errorState, setErrorState] = useState(initialErrorState);
    const [email, setEmail] = useState('');

    const closeFPModal = () => {
        setEmail('');
        document.getElementsByTagName('body')[0].classList.toggle('modal-open');
        document.getElementById('forgot_pass_email').classList.remove('show');
        document.getElementById('forgot_pass_email_content').classList.remove('show');
    };
    const openCompleteModal = () => {
        document.getElementsByTagName('body')[0].classList.toggle('modal-open');
        document.getElementById('fp_completed').classList.add('show');
        document.getElementById('fp_completed_content').classList.add('show');
    };
    const FPValidate = () => {
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

        return validate;
    };
    const submitEmail = () => {
        if (FPValidate()) {
            setErrorState(initialErrorState);
            closeFPModal();
            openCompleteModal();
            setTimeout(() => {
                document.getElementsByTagName('body')[0].classList.remove('modal-open');
                document.getElementById('fp_completed').classList.remove('show');
                document.getElementById('fp_completed_content').classList.remove('show');
            }, 2000)
        }
    };

    return (
        <div className='modal' id='forgot_pass_email'>
            <div className='modal_content forgot_password_modal' id='forgot_pass_email_content'>
                <div className='modal_header'>
                    <span className='header_text'>Enter your Email</span>
                    <button onClick={closeFPModal}>
                        <CloseIcon sx={{ color : "#39B5FF", fontSize: "30px" }} />
                    </button>
                </div>
                <div className='modal_body'>
                    <div className='fp_input_section'>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='login_input' variant="outlined" >
                                <TextField 
                                    id="fp_email" 
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
                </div>
                <div className='modal_footer'>
                    <ColorButton onClick={submitEmail} className='login_button' sx={{ borderRadius: "5px", fontSize: "20px" }} variant="contained">Send Link</ColorButton>
                </div>
            </div>
        </div>
    )
};

const LinkSentModal = () => {
    return (
        <div className='modal' id='fp_completed'>
            <div className='modal_content forgot_password_modal' id='fp_completed_content'>
                <div className='modal_body' style={{ height: '70%' }}>
                    <div className='success_icon_wrapper'>
                        <CheckCircleOutlineIcon sx = {{ color : "#39B5FF", fontSize: '75px' }} />
                    </div>
                    <span className='mail_sent_text'>
                        Reset Password Email has been sent to your Email.
                    </span>
                </div>
            </div>
        </div>
    )
};

export {
    ForgotPasswordModal,
    LinkSentModal
}