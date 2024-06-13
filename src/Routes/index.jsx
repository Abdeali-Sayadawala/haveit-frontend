import partnerRoutes from "./Partner.routes";

const mainRoutes = [
    {
        path: "partner",
        children: {partnerRoutes},
    }
]

export default mainRoutes;