import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useFetchHook = (getAxiosFn) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const getReviews = async () => {
        setIsLoading(true);
        try {
            const data = await getAxiosFn();
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getReviews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, isLoading, error };
};

export default useFetchHook;

useFetchHook.propTypes = {
    getAxiosFn: PropTypes.func,
};
