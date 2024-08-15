import PropTypes from "prop-types";
import { useMemo } from "react";
import styles from "./Title.module.css";
const Title = ({ type, children, className }) => {
    const mergedStyles = useMemo(
        () => `${styles[type]} ${className ?? ""}`,
        [className, type]
    );

    switch (type) {
        case "h1":
            return <h1 className={mergedStyles}> {children} </h1>;
        case "h2":
            return <h2 className={mergedStyles}> {children} </h2>;
        case "h3":
            return <h3 className={mergedStyles}> {children} </h3>;
        case "h4":
            return <h4 className={mergedStyles}> {children} </h4>;
        case "h5":
            return <h5 className={mergedStyles}> {children} </h5>;

        default:
            return <h6 className={mergedStyles}> {children} </h6>;
    }
};

export default Title;

Title.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
