import { Routes, Route } from 'react-router-dom';
import RestaurantInfo from "../../Pages/Partner/RegisterRestaurant/RestaurantInfo";
import RestaurantDocs from "../../Pages/Partner/RegisterRestaurant/RestaurantDocs";
import Review from "../../Pages/Partner/RegisterRestaurant/Review";

// const registerRestaurantRoutes = [
//     {
//         path: "res-info",
//         element: <RestaurantInfo />,
//     },
//     {
//         path: "res-docs",
//         element: <RestaurantDocs />,
//     },
//     {
//         path: "review",
//         element: <Review />,
//     }
// ]

const registerRestaurantRoutes = (
    <Routes>
        <Route path='/res-info' element={<RestaurantInfo />}></Route>
        <Route path='/res-docs' element={<RestaurantDocs />}></Route>
        <Route path='/review' element={<Review />}></Route>
    </Routes>
)

export default registerRestaurantRoutes;