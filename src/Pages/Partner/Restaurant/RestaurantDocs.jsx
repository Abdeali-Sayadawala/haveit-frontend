import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useOutletContext } from "react-router-dom";

import { ColorButton, ColorButtonOutline, textFieldTheme } from '../../Pages/Partner/helpers/CommonVars';
import { useNavigate } from 'react-router-dom';

import cardPreview from '../Assets/card_upload_preview.png';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const RestaurantDocs = () => {

    const setCurrentStep = useOutletContext();
    const navigate = useNavigate();

    React.useEffect(() => {
        setCurrentStep(1);
    }, []);

    var initialErrorState = {
        pan_num: {
            error: false,
            message: '',
        },
        fssai_num: {
            error: false,
            message: '',
        },
        gst_num: {
            error: false,
            message: '',
        }
    };

    const [errorState, setErrorState] = React.useState(initialErrorState);

    // input data variables
    const [panNum, setPanNum] = React.useState('');
    const [fssaiNum, setFssaiNum] = React.useState('');
    const [gstNum, setGstNum] = React.useState('');

    const navReview = () => {
        navigate('/register-restaurant/review');
    }

    const back = () => {
        navigate('/register-restaurant/res-info');
    }

    return (
        <div className="regres-data-wrapper">
            <div className="section_header">
                Required Documents
            </div>
            <div className='left_btn'>
                <ColorButtonOutline
                    onClick={ back }
                    className='back_btn'
                    component="label"
                    variant="outlined"
                    tabIndex={-1}
                >
                    Back
                </ColorButtonOutline>
            </div>

            <div className="section_body">
                <div className="section_title">
                    Pan Card details
                </div>
                <div className='doc_upload_section'>
                    <div className='doc_section'>
                        <div className='doc_title'>
                            Front
                        </div>
                        <div className='doc_actions'>
                            <img src={cardPreview} id='pan_card_front' alt="" />
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
                            <span className='suppoprted_types_txt'>supported types: <br /> jpg, jpeg, png</span>
                        </div>
                    </div>
                    <div className='doc_section'>
                        <div className='doc_title'>
                            Back
                        </div>
                        <div className='doc_actions'>
                            <img src={cardPreview} id='pan_card_back' alt="" />
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
                            <span className='suppoprted_types_txt'>supported types: <br /> jpg, jpeg, png</span>
                        </div>
                    </div>
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="pan_num" 
                                label="Pan card number"  
                                placeholder='Pan card number' 
                                color='blue'
                                helperText={errorState.pan_num.message} 
                                error={errorState.pan_num.error}
                                value={panNum}
                                onChange={(event) => {
                                    setPanNum(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
            </div>

            <div className="section_body">
                <div className="section_title">
                    FSSAI registeration details
                </div>
                <div className='doc_upload_section'>
                    <div className='doc_section'>
                        <div className='doc_title'>
                            License document
                        </div>
                        <div className='doc_actions'>
                            <img src={cardPreview} id='fssai_preview' alt="" />
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
                                supported types: <br /> jpg, jpeg, png, pdf
                            </span>
                        </div>
                    </div>
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="fssai_num" 
                                label="FSSAI registration number"  
                                placeholder='FSSAI registration number' 
                                color='blue'
                                helperText={errorState.fssai_num.message} 
                                error={errorState.fssai_num.error}
                                value={fssaiNum}
                                onChange={(event) => {
                                    setFssaiNum(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
            </div>

            <div className="section_body">
                <div className="section_title">
                    GST Information
                </div>
                <div className='full_section'>
                    <ThemeProvider theme={textFieldTheme}>
                        <FormControl className='txt_input' variant="outlined" >
                            <TextField 
                                id="gst_num" 
                                label="GST number (Optional)"  
                                placeholder='GST number' 
                                color='blue'
                                helperText={errorState.gst_num.message} 
                                error={errorState.gst_num.error}
                                value={gstNum}
                                onChange={(event) => {
                                    setGstNum(event.target.value);
                                    }} 
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>
            </div>

            <div className='next_submit_btn'>
                <ColorButton
                    onClick={ navReview }
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

export default RestaurantDocs;