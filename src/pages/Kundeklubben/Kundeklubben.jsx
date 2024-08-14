import Welcome from "@components/Welcome/Welcome";
import { welcomeData } from "@variables/welcomeData.js";
import styles from "./Kundeklubben.module.css";
import KundeForm from "@components/KundeForm/KundeForm";
const Kundeklubben = () => {
    return (
        <>
            <Welcome
                {...welcomeData.kundeklubben}
                titleType="h2"
                sectionStyles={styles.section}
                containerStyles={styles.container}
                subtitleStyles={styles.subtitle}
        />
            <KundeForm/>
        </>
    );
};

export default Kundeklubben;
