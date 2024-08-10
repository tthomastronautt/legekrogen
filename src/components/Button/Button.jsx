import styles from "./Button.module.css";
import { PropTypes } from "prop-types";
import { useMemo } from "react";

const Button = ({ children, className, ...rest }) => {
    const mergedStyles = useMemo(
        () => `${styles.button} ${className ?? ""}`,
        [className]
    );

    return (
        <button {...rest} className={mergedStyles}>
            {children}
        </button>
    );
};

export default Button;

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
