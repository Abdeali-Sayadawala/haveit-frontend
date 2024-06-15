import './OrderPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import MopedIcon from '@mui/icons-material/Moped';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const OrderPage = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);

    function goToOrders() { //navigate to menu
        navigate('/admin/orders', { replace: true });
    }

    const handleActionClick = (action) => {
        if (action === 'accept') {
            setActiveStep(2);
        }
        if (action === 'ready') {
            setActiveStep(3);
        }
        if (action === 'complete') {
            setActiveStep(4);
        }
    }

    const steps = [
        'Pending',
        'Accepted (Preparing)',
        'Ready (On the Way)',
        'Completed'
      ];

    const HorizontalLinearAlternativeLabelStepper = () => {
        return (
            <Box className={'stepper_box'}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          );
    }

    return (
        <div className='admin_body_section' id='admin_orders'>
            <div className='crud_parent_section'>
                <div className='order_summary_headers'>
                    <div className='order_id_back'>
                        <button onClick={goToOrders} className='orders_button'><ArrowBackIcon className={'back-arrow-class'} />Orders</button>
                        <span id='order_id'>Order #{orderId} </span>
                    </div>
                </div>

                <div className='order_summary_body'>
                    <div className='order_info_wrapper'>
                        <div className='order_info'>
                            <div className='order_section_title'>
                                <span>Order Status</span>
                            </div>
                            <div className='order_section_body'>
                                <div className='order_info_stepper'>
                                    <HorizontalLinearAlternativeLabelStepper />
                                </div>
                                <div className='data_divider_orders'></div>
                                <div className='order_info_actions'>
                                    <div className='action_button_wrapper'>
                                        <Button id='accept_btn' className='accept_btn' variant="outlined" onClick={() => handleActionClick('accept')} startIcon={<DoneIcon />}>
                                            Accept
                                        </Button>
                                    </div>
                                    <div className='action_button_wrapper'>
                                        <Button id='reject_btn' className='reject_btn' variant="outlined" onClick={() => handleActionClick('reject')} startIcon={<CloseIcon />}>
                                            Reject
                                        </Button>
                                    </div>
                                    <div className='action_button_wrapper'>
                                        <Button id='accept_button' className='accept_button' variant="outlined" onClick={() => handleActionClick('ready')} startIcon={<MopedIcon />}>
                                            Ready
                                        </Button>
                                    </div>
                                    <div className='action_button_wrapper'>
                                        <Button id='accept_button' className='accept_button' variant="outlined" onClick={() => handleActionClick('complete')} startIcon={<CheckCircleIcon />}>
                                            Complete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='order_prod'>
                            <div className='order_section_title'>
                                <span>Order Item details</span>
                            </div>
                        </div>
                    </div>
                    <div className='order_detail_wrapper'>
                        <div className='order_detail_body'>
                            <div className='order_section_title'>
                                <span>Order details</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage;