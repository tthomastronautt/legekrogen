import styles from "./Loader.module.css";
import { PropTypes } from "prop-types";

const Loader = ({ className }) => {
    const mergedClassName = `${styles.loader} ${className ?? ""} `

    return <div className={mergedClassName}></div>;
};

export default Loader;

Loader.propTypes = {
    className: PropTypes.string,
};
