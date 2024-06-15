import PartnerLogin from "../../Pages/Partner/Auth/Login";
import PartnerRegister from "../../Pages/Partner/Auth/Register";
import ResetPassword from "../../Pages/Partner/ResetPassword/ResetPassword";
import RegisterRestaurant from "../../Pages/Partner/RegisterRestaurant";
import Partner from "../../Pages/Partner";

import registerRestaurantRoutes from "./registerRestaurant.routes";
import restaurantPanelRoutes from "./restaurantPanel.routes";

const partnerRoutes = [
    {
        path: "login",
        element: <PartnerLogin />,
    },
    {
        path: "register",
        element: <PartnerRegister />,
    },
    {
        path: "reset-password",
        element: <ResetPassword />,
    },
    {
        path: "register-restaurant",
        element: <RegisterRestaurant />,
        childern: {registerRestaurantRoutes},
    },
    {
        path: "restaurant",
        element: <Partner />,
        childern: {restaurantPanelRoutes},
    }
]

export default partnerRoutes;