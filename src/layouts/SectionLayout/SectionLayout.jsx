import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SectionLayout.module.css";

const SectionLayout = ({ children, classNameSection, classNameContainer }) => {
    const mergedStyles = useMemo(() => {
        return {
            section: `${styles.section} ${classNameSection ?? ""}`,
            container: `${styles.container} ${classNameContainer ?? ""}`,
        };
    }, [classNameContainer, classNameSection]);

    return (
        <section className={mergedStyles.section}>
            <div className={mergedStyles.container}>{children}</div>
        </section>
    );
};

export default SectionLayout;

SectionLayout.propTypes = {
    children: PropTypes.node.isRequired,
    classNameSection: PropTypes.string,
    classNameContainer: PropTypes.string,
};
