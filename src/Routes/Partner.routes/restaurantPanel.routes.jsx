import PartnerLogin from "../../Pages/Partner/Auth/Login";

const restaurantPanelRoutes = [
    {
        path: "dashboard",
        element: <PartnerLogin />,
    },
    {
        path: "orders",
        children: [
            {
              index: true,
              element: <Products />,
            },
            {
              path: ":orderId",
              element: <Product />,
            },
          ],
    },
    {
        path: "products",
        element: <PartnerLogin />,
    }
]

export default restaurantPanelRoutes;