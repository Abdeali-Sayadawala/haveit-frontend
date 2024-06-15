import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useOutletContext } from "react-router-dom";

import { ColorButton, ColorButtonOutline } from '../helpers/CommonVars';
import { useNavigate } from 'react-router-dom';

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
        navigate('/register-restaurant/res-docs');
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