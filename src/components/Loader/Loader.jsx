import { PropTypes } from "prop-types";
import styles from "./Loader.module.css";

const Loader = ({ className }) => {
    const mergedClassName = `${styles.loader} ${className ?? ""} `

    return <div className={mergedClassName}></div>;
};

export default Loader;

Loader.propTypes = {
    className: PropTypes.string,
};
