import { lazy } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "@pages/ErrorBoundary";
import IndexLayout from "@layouts/IndexLayout";

import Loader from "@components/Loader/Loader";

const Forside = lazy(() => import("@pages/Forside/Forside"));
const Produkter = lazy(() => import("@pages/Produkter/Produkter"));
const FAQ = lazy(() => import("@pages/FAQ/FAQ"));
const Kundeklubben = lazy(() => import("@pages/Kundeklubben/Kundeklubben"));
const NotFounded = lazy(() => import("@pages/NotFounded/NotFounded"));

const router = createBrowserRouter([
    {
        element: (
            <IndexLayout>
                <Outlet />
            </IndexLayout>
        ),
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "/",
                element: <Forside />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: "/produkter",
                element: <Produkter />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: "/faq",
                element: <FAQ />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: "/kundeklubben",
                element: <Kundeklubben />,
                errorElement: <ErrorBoundary />,
            },


            {
                path: "*",
                element: <NotFounded />,
                errorElement: <ErrorBoundary />,
            },
        ],
    },
]);

const AppRoutes = () => {
    return (
        <RouterProvider
            fallbackElement={<Loader />}
            future={{ v7_startTransition: true }}
            router={router}
        />
    );
};

export default AppRoutes;
