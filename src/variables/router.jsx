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
const Kasse = lazy(() => import("@pages/Kasse/Kasse"));

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
                path: "/legekrogen",
                element: <Forside />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: "legekrogen/produkter",
                element: <Produkter />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: "legekrogen/faq",
                element: <FAQ />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: "legekrogen/kundeklubben",
                element: <Kundeklubben />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: "legekrogen/kasse",
                element: <Kasse />,
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
