import Welcome from "@components/Welcome/Welcome";
import { welcomeData } from "@variables/welcomeData.js";
import styles from "./Produkter.module.css";
const Produkter = () => {
    return (
        <>
            <Welcome
                {...welcomeData.produkter}
                titleType="h2"
                sectionStyles={styles.section}
                containerStyles={styles.container}
                subtitleStyles={styles.subtitle}
            />
        </>
    );
};

export default Produkter;
