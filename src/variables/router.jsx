/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import IndexLayout from "@layouts/IndexLayout";

const Forside = lazy(() => import("@pages/Forside/Forside"));
const Produkter = lazy(() => import("@pages/Produkter/Produkter"));
const FAQ = lazy(() => import("@pages/FAQ/FAQ"));
const Kundeklubben = lazy(() => import("@pages/Kundeklubben/Kundeklubben"));
const NotFounded = lazy(() => import("@pages/NotFounded/NotFounded"));
const ErrorBoundary = lazy(() => import("@pages/ErrorBoundary"));

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

export default router;
