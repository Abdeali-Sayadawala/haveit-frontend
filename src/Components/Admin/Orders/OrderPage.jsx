import './OrderPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const OrderPage = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();

    function goToOrders() { //navigate to menu
        navigate('/admin/orders', { replace: true });
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
                            <div className='customer_info'>
                                <div className='customer_half'></div>
                                <div className='customer_half'></div>
                            </div>
                            <div className='created_info'></div>
                        </div>
                        <div className='order_prod'></div>
                    </div>
                    <div className='order_status_wrapper'>
                        <div className='order_status'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage;