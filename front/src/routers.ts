import {ADMIN_ROUTE, CART_ROUTE, CATALOG_ROUTE, HOME_ROUTE, MARKING_ROUTE, PRODUCT_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import ProductCard from "./pages/ProductCard";
import MakingAnOrder from "./pages/MakingAnOrder";
import Home from "./pages/Home";


export const authRouters = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CART_ROUTE,
        Component: Cart
    }
]

export const publicRouters = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: MARKING_ROUTE,
        Component: MakingAnOrder
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductCard
    }
]