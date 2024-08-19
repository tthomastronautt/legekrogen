import styles from "./Input.module.css";
import { useMemo } from "react";
import { PropTypes } from "prop-types";
const Input = ({ className, ...props }) => {
    const mergedStyles = useMemo(() => {
        return `${styles.input} ${className ?? ""}`;
    }, [className]);
    return <input className={mergedStyles} {...props} />;
};

export default Input;

Input.propTypes = {
    className: PropTypes.string,
};
