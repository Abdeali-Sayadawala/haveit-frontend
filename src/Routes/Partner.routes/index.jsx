import { Routes, Route } from 'react-router-dom';
import PartnerLogin from "../../Pages/Partner/Auth/Login";
import PartnerRegister from "../../Pages/Partner/Auth/Register";
import ResetPassword from "../../Pages/Partner/ResetPassword/ResetPassword";
import RegisterRestaurant from "../../Pages/Partner/RegisterRestaurant";
import Partner from "../../Pages/Partner";
import RestaurantInfo from "../../Pages/Partner/RegisterRestaurant/RestaurantInfo";
import RestaurantDocs from "../../Pages/Partner/RegisterRestaurant/RestaurantDocs";
import Review from "../../Pages/Partner/RegisterRestaurant/Review";
import Dashboard from '../../Pages/Partner/Dashboard';
import Orders from '../../Pages/Partner/Orders';
import Products from '../../Pages/Partner/Products';
import Categories from '../../Pages/Partner/Categories';

const partnerRoutes = (
    <Routes>
        <Route path='/login' element={<PartnerLogin />}></Route>
        <Route path='/register' element={<PartnerRegister />}></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
        <Route path='/register-restaurant' element={<RegisterRestaurant />}>
            <Route path='res-info' element={<RestaurantInfo />}></Route>
            <Route path='res-docs' element={<RestaurantDocs />}></Route>
            <Route path='review' element={<Review />}></Route>
        </Route>
        <Route path='' element={<Partner />}>
            <Route path='dashboard' element={<Dashboard />}/>
            <Route path="/orders" element={<Orders />}/>
            {/* <Route path="/orders/:orderId" element={<OrderPage />}/> */}
            <Route path="/products" element={<Products />}/>
            <Route path="/categories" element={<Categories />}/>
        </Route>
    </Routes>
)

export default partnerRoutes;