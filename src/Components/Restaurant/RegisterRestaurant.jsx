import React from 'react';
import './Restaurant.css';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

const RegisterRestaurant = () => {

    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (location.pathname === '/register-restaurant' || location.pathname === '/register-restaurant/'){
            console.log("restaurant navigate");
            navigate('/register-restaurant/res-info');
        }
    }, []);

    const steps = [
        {
            label: 'Restaurant information',
            description: 'This is an example description to check the spacing of the elements.'
        },
        {
            label: 'Requried Documents',
            description: 'This is an example description to check the spacing of the elements.'
        },
        {
            label: 'Review data',
            description: 'This is an example description to check the spacing of the elements.'
        },
    ];

    const [currentStep, setCurrentStep] = React.useState(0);

    return (
        <div className='regres-wrapper'>
            <div className='regres-info'>
                <div className='card-regress-info'>
                    <div className='card-title'>
                        Register your Restaurant
                    </div>
                    <div className='divider'></div>
                    <div className='card-body'>
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={currentStep} orientation='vertical'>
                                {steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step.label}</StepLabel>
                                    <StepContent>{step.description}</StepContent>
                                </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </div>
                </div>
            </div>
            <div className='regres-data'>
                <Outlet context={setCurrentStep} />
                <div style={{ height: '70px' }}></div>
            </div>
        </div>
    )
}

export default RegisterRestaurant;