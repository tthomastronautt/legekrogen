import { RouterProvider } from "react-router-dom";
import Loader from "@components/Loader/Loader";
import router from "@variables/router.jsx";

const AppRoutes = () => (
    <RouterProvider
        fallbackElement={<Loader />}
        future={{ v7_startTransition: true }}
        router={router}
    />
);

export default AppRoutes;
