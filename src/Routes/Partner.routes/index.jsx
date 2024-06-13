import PartnerLogin from "../../Pages/Partner/Auth/Login";
import registerRestaurantRoutes from "./registerRestaurant.routes";
import restaurantPanelRoutes from "./restaurantPanel.routes";

const partnerRoutes = [
    {
        path: "login",
        element: <PartnerLogin />,
    },
    {
        path: "register",
        element: <PartnerLogin />,
    },
    {
        path: "reset-password",
        element: <PartnerLogin />,
    },
    {
        path: "register-restaurant",
        childern: {registerRestaurantRoutes},
    },
    {
        path: "restaurant",
        childern: {restaurantPanelRoutes},
    }
]

export default partnerRoutes;