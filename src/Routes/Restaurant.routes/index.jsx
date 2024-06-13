import RestaurantPages from "../../Pages/Restaurant";
import Home from "../../Pages/Restaurant/Home";
import Menu from "../../Pages/Restaurant/Menu";
import Checkout from "../../Pages/Restaurant/Checkout";


const restaurantRoutes = [
    {
        index: true,
        element:<RestaurantPages />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "menu",
                element:<Menu />
            },
            {
                path: "checkout",
                element:<Checkout />
            },
            {
                path: "manage-address",
                element:<Address />
            },
            {
                path: "orders",
                element:<Orders />
            }
        ]
    }
]

export default restaurantRoutes;