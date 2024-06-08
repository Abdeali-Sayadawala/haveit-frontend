import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useOutletContext } from "react-router-dom";

import { ColorButton, textFieldTheme } from '../Partner/helpers/CommonVars';
import { useNavigate } from 'react-router-dom';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import logoPreview from '../Assets/logo_preview.png';

const RestaurantInfo = () => {

    const setCurrentStep = useOutletContext();
    const navigate = useNavigate();

    React.useEffect(() => {
        setCurrentStep(0);
    }, []);

    var initialErrorState = {
        res_name: {
            error: false,
            message: '',
        },
        res_address: {
            error: false,
            message: '',
        },
        res_phone: {
            error: false,
            message: '',
        },
        res_maplnk: {
            error: false,
            message: '',
        },
        res_lat: {
            error: false,
            message: '',
        },
        res_lng:  {
            error: false,
            message: '',
        },
        res_own_fn: {
            error: false,
            message: '',
        },
        res_own_mn: {
            error: false,
            message: '',
        },
        res_own_ln: {
            error: false,
            message: '',
        },
        res_email: {
            error: false,
            message: '',
        },
        res_own_phone: {
            error: false,
            message: '',
        }
    };
    const [errorState, setErrorState] = React.useState(initialErrorState);

    // input data variables
    const [resName, setResName] = React.useState('');
    const [resAddress, setResAddress] = React.useState('');
    const [resPhone, setResPhone] = React.useState('');
    const [resLat, setResLat] = React.useState('');
    const [resLng, setResLng] = React.useState('');
    const [resMaplnk, setResMaplnk] = React.useState('');
    const [resOwnFN, setResOwnFN] = React.useState('');
    const [resOwnMN, setResOwnMN] = React.useState('');
    const [resOwnLN, setResOwnLN] = React.useState('');
    const [resEmail, setResEmail] = React.useState('');
    const [resOwnPhone, setResOwnPhone] = React.useState('');

    const navDocs = () => {
        navigate('/register-restaurant/res-docs');
    }

    return (
        <div className="regres-data-wrapper">
            <div className="section_header">
                Restaurant Information
            </div>
            <div className="section_body">
                <div className="section_title">
                    Restaurant details
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="res_name" 
                                label="Restaurant Name"  
                                placeholder='Restaurant Name' 
                                color='blue'
                                helperText={errorState.res_name.message} 
                                error={errorState.res_name.error}
                                value={resName}
                                onChange={(event) => {
                                    setResName(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
                <div className='doc_upload_section'>
                    <div className='doc_section'>
                        <div className='doc_title'>
                            Restaurant Logo
                        </div>
                        <div className='doc_actions'>
                            <img src={logoPreview} id='res_logo_preview' alt="" />
                            <div className='doc_upload_btn'>
                                <ColorButton
                                    className='upload_btn'
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                    >
                                    Upload
                                </ColorButton>
                            </div>
                            <span className='suppoprted_types_txt'>
                                supported types: <br /> jpg, jpeg, png
                            </span>
                        </div>
                    </div>
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="res_phone" 
                                label="Restaurant Contact Number"  
                                placeholder='Restaurant Contact Number' 
                                color='blue'
                                helperText={errorState.res_phone.message} 
                                error={errorState.res_phone.error}
                                value={resPhone}
                                onChange={(event) => {
                                    setResPhone(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
            </div>
            <div className="section_body">
                <div className="section_title">
                    Restaurant location
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="res_address" 
                                label="Complete Restaurant Address"  
                                placeholder='Complete Restaurant Address' 
                                color='blue'
                                helperText={errorState.res_address.message} 
                                error={errorState.res_address.error}
                                value={resAddress}
                                onChange={(event) => {
                                    setResAddress(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="res_maplnk" 
                                label="Restaurant maps link"  
                                placeholder='Restaurant maps link' 
                                color='blue'
                                helperText={errorState.res_maplnk.message} 
                                error={errorState.res_maplnk.error}
                                value={resMaplnk}
                                onChange={(event) => {
                                    setResMaplnk(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
                <div className='full_section'>
                    <div className='input_title'>
                        Location coordinates (Optional)
                    </div>
                    <div className='half_section'>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='txt_input' variant="outlined" >
                                <TextField 
                                    id="res_lat" 
                                    label="Latitude"  
                                    placeholder='Latitude' 
                                    color='blue'
                                    helperText={errorState.res_lat.message} 
                                    error={errorState.res_lat.error}
                                    value={resLat}
                                    onChange={(event) => {
                                        setResLat(event.target.value);
                                        }} 
                                />
                            </FormControl>
                        </ThemeProvider>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='txt_input' variant="outlined" >
                                <TextField 
                                    id="res_lng" 
                                    label="Longitude"  
                                    placeholder='Longitude' 
                                    color='blue'
                                    helperText={errorState.res_lng.message} 
                                    error={errorState.res_lng.error}
                                    value={resLng}
                                    onChange={(event) => {
                                        setResLng(event.target.value);
                                        }} 
                                />
                            </FormControl>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
            <div className="section_body">
                <div className="section_title">
                    Restaurant Owner details
                </div>
                <div className='full_section'>
                    <div className='input_title'>
                        Owner Name
                    </div>
                    <div className='half_section'>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='txt_input' variant="outlined" >
                                <TextField 
                                    id="res_own_fn" 
                                    label="First Name"  
                                    placeholder='First Name' 
                                    color='blue'
                                    helperText={errorState.res_own_fn.message} 
                                    error={errorState.res_own_fn.error}
                                    value={resOwnFN}
                                    onChange={(event) => {
                                        setResOwnFN(event.target.value);
                                        }} 
                                />
                            </FormControl>
                        </ThemeProvider>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='txt_input' variant="outlined" >
                                <TextField 
                                    id="res_own_fn" 
                                    label="Middle Name"  
                                    placeholder='Middle Name' 
                                    color='blue'
                                    helperText={errorState.res_own_mn.message} 
                                    error={errorState.res_own_mn.error}
                                    value={resOwnMN}
                                    onChange={(event) => {
                                        setResOwnMN(event.target.value);
                                        }} 
                                />
                            </FormControl>
                        </ThemeProvider>
                        <ThemeProvider theme={textFieldTheme}>
                            <FormControl className='txt_input' variant="outlined" >
                                <TextField 
                                    id="res_own_ln" 
                                    label="Last Name"  
                                    placeholder='Last Name' 
                                    color='blue'
                                    helperText={errorState.res_own_ln.message} 
                                    error={errorState.res_own_ln.error}
                                    value={resOwnLN}
                                    onChange={(event) => {
                                        setResOwnLN(event.target.value);
                                        }} 
                                />
                            </FormControl>
                        </ThemeProvider>
                    </div>
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="res_email" 
                                label="Restaurant owner email"  
                                placeholder='Restaurant owner email' 
                                color='blue'
                                helperText={errorState.res_email.message} 
                                error={errorState.res_email.error}
                                value={resEmail}
                                onChange={(event) => {
                                    setResEmail(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="res_own_phone" 
                                label="Restaurant owner phone"  
                                placeholder='Restaurant owner phone' 
                                color='blue'
                                helperText={errorState.res_own_phone.message} 
                                error={errorState.res_own_phone.error}
                                value={resOwnPhone}
                                onChange={(event) => {
                                    setResOwnPhone(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
            </div>
            <div className='next_submit_btn'>
                <ColorButton
                    onClick={ navDocs }
                    className='next_btn'
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                >
                    Next
                </ColorButton>
            </div>
        </div>
    )
}

export default RestaurantInfo;