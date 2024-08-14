import PropTypes from "prop-types";
import Loader from "@components/Loader/Loader";
import styles from "./HandlerSection.module.css";
const HandlerSection = ({ data, isLoading, error, children }) => {
    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div className={styles.error}> {error} </div>;
    }

    if (data.length === 0) {
        return <> No data </>;
    }
    return <> {children} </>;
};

export default HandlerSection;

HandlerSection.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    children: PropTypes.node,
};
