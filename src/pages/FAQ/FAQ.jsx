import Welcome from "@components/Welcome/Welcome";
import { welcomeData } from "@variables/welcomeData.js";
import styles from "./FAQ.module.css";
import Questions from '@components/Questions/Questions';
const Faq = () => {
    return (
        <>
            <Welcome
                {...welcomeData.faq}
                titleType="h2"
                sectionStyles={styles.section}
                containerStyles={styles.container}
                subtitleStyles={styles.subtitle}
            />
            <Questions /> 
        </>
    );
};

export default Faq;
