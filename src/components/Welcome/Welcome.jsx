import { PropTypes } from "prop-types";
import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import Title from "@components/Title/Title";
import styles from "./Welcome.module.css";

const Welcome = ({
    img,
    title,
    subtitle,
    titleType,
    subtitleStyles,
    text,
    sectionStyles,
    containerStyles
}) => {

    const mergedStyles = `${styles.welcome} ${sectionStyles ?? ""}`

    return (
        <SectionLayout
            classNameSection={mergedStyles}
            classNameContainer={containerStyles}
        >
            <Title type={titleType} className={styles.title}>
                {title}
            </Title>
            <p className={subtitleStyles}>{subtitle}</p>
            {text && <p className={styles.text}>{text}</p>}
            <img className={styles.img} src={img} alt="forside" />
        </SectionLayout>
    );
};

export default Welcome;

Welcome.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    titleType: PropTypes.string,
    subtitleStyles: PropTypes.string,
    text: PropTypes.string,
    sectionStyles: PropTypes.string,
    containerStyles: PropTypes.string
};
