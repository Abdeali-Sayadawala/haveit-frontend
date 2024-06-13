import RestaurantInfo from "../../Pages/Partner/RegisterRestaurant/RestaurantInfo";
import RestaurantDocs from "../../Pages/Partner/RegisterRestaurant/RestaurantDocs";
import Review from "../../Pages/Partner/RegisterRestaurant/Review";

const registerRestaurantRoutes = [
    {
        path: "res-info",
        element: <RestaurantInfo />,
    },
    {
        path: "res-docs",
        element: <RestaurantDocs />,
    },
    {
        path: "review",
        element: <Review />,
    }
]

export default registerRestaurantRoutes;