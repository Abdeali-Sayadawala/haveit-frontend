import partnerRoutes from "./Partner.routes";
import restaurantRoutes from "./Restaurant.routes";

const mainRoutes = [
    {
        path: "partner",
        children: partnerRoutes,
    },
    {
        path: "restaurant",
        children: restaurantRoutes,
    }
]

export default mainRoutes;