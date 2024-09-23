import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useOutletContext } from "react-router-dom";

import { ColorButton, ColorButtonOutline } from '../helpers/CommonVars';
import { useNavigate } from 'react-router-dom';

import cardPreview from '../../../Components/Assets/card_upload_preview.png';
import logoPreview from '../../../Components/Assets/logo_preview.png';

const Review = () => {

    const setCurrentStep = useOutletContext();
    const navigate = useNavigate();

    React.useEffect(() => {
        setCurrentStep(2);
    }, []);

    var initialErrorState = {

    };

    const [errorState, setErrorState] = React.useState(initialErrorState);

    const back = () => {
        window.scrollTo(0, 0);
        navigate('/partner/register-restaurant/res-docs');
    }

    return (
        <div className="regres-data-wrapper">
            <div className="section_header">
                Review
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
                    Restaurant details
                </div>
                <div className='review_full_section'>
                    <div className='section_value'>Restaurant Name - Have it!</div>
                </div>
                <div className='doc_upload_section'>
                    <div className='doc_section'>
                        <div className='doc_title'>
                            Restaurant Logo
                        </div>
                        <div className='doc_actions'>
                            <img src={logoPreview} id='res_logo_preview' alt="" />
                        </div>
                    </div>
                </div>
                <div className='review_full_section'>
                    <div className='section_value'>Restaurant Contact Number - 	022 2854 1877</div>
                </div>
            </div>

            <div className="section_body">
                <div className="section_title">
                    Restaurant details
                </div>
                <div className='review_full_section'>
                    <div className='section_value'>Complete Restaurant Address - Crystal Line, G Bunglow, Ground Floor, Thakur Complex, Kandiveli East, Mumbai, Maharashtra, 400101</div>
                </div>
                <div className='review_full_section'>
                    <div className='section_value'>Restaurant maps link - https://www.google.com/maps/place/Hotel+Suba+Elite+Vadodara/@22.3273289,73.1923797,16.5z/data=!4m9!3m8!1s0x395fcf49812f61df:0xf5fcfa1430bbed79!5m2!4m1!1i2!8m2!3d22.3204741!4d73.1884592!16s%2Fg%2F11b6t23_v3?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D</div>
                </div>
                <div className='review_full_section' style={{flexDirection: "column"}}>
                    <div className='section_value'>Location coordinates:</div>
                    <div className='half_section'>
                        <div className='section_value'>Latitude - Have it!</div>
                        <div className='section_value'>Longitude - Have it!</div>
                    </div>
                </div>
            </div>
            <div className="section_body">
                <div className="section_title">
                    Restaurant Owner details
                </div>
                <div className='review_full_section' style={{flexDirection: "column"}}>
                    <div className='section_value'>Full Name:</div>
                    <div className='half_section'>
                        <div className='section_value'>Abdeali</div>
                        <div className='section_value'>Firojbhai</div>
                        <div className='section_value'>Sayadawala</div>
                    </div>
                </div>
                <div className='review_full_section'>
                    <div className='section_value'>Restaurant owner email - abdeali00000@gmail.com</div>
                </div>
                <div className='review_full_section'>
                    <div className='section_value'>Restaurant owner phone - 022 2854 1877</div>
                </div>
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
                        </div>
                    </div>
                    <div className='doc_section'>
                        <div className='doc_title'>
                            Back
                        </div>
                        <div className='doc_actions'>
                            <img src={cardPreview} id='pan_card_back' alt="" />
                        </div>
                    </div>
                </div>
                <div className='review_full_section'>
                    <div className='section_value'>PAN Card Number - JDHSB2863N</div>
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
                        </div>
                    </div>
                </div>
                <div className='review_full_section'>
                    <div className='section_value'>FSSAI registration number - JDHSB2863N</div>
                </div>
            </div>
            <div className="section_body">
                <div className="section_title">
                GST Information
                </div>
                <div className='review_full_section'>
                    <div className='section_value'>GST number - JDHSB2863N</div>
                </div>
            </div>
            <div className='next_submit_btn'>
                <ColorButton
                    className='next_btn'
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                >
                    Submit
                </ColorButton>
            </div>
        </div>
    )
}

export default Review;