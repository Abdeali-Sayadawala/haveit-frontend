import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import partnerRoutes from "./Partner.routes";
import restaurantRoutes from "./Restaurant.routes";

const mainRoutes = (
    <Routes>
        <Route path='/partner/*' element={partnerRoutes}/>
        <Route path='/restaurant/*' element={restaurantRoutes}/>
    </Routes>
)

export default mainRoutes;