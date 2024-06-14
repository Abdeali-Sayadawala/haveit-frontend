import Dashboard from "../../Pages/Partner/Dashboard";
import Orders from "../../Pages/Partner/Orders";
import Products from "../../Pages/Partner/Products";

const restaurantPanelRoutes = [
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: "orders",
        children: [
            {
              index: true,
              element: <Orders />,
            },
            {
              path: ":orderId",
              element: <Orders />,
            },
          ],
    },
    {
        path: "products",
        element: <Products />,
    }
]

export default restaurantPanelRoutes;