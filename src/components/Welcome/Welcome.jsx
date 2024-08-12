import Title from "@components/Title/Title";
import styles from "./Welcome.module.css";

import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import { PropTypes } from "prop-types";

const Welcome = ({ img, title, subtitle }) => {
    return (
        <SectionLayout classNameSection={styles.welcome}>
            <Title type="h1" className={styles.title}>
                {title}
            </Title>
            <p>{subtitle}</p>
            <img className={styles.img} src={img} alt="forside" />
        </SectionLayout>
    );
};

export default Welcome;

Welcome.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};
