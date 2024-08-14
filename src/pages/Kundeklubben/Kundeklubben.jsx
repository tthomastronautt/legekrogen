import { useMemo } from "react";
import Welcome from "@components/Welcome/Welcome";
import KundeForm from "@components/KundeForm/KundeForm";
import { welcomeData } from "@variables/welcomeData.js";
import styles from "./Kundeklubben.module.css";
const Kundeklubben = () => {
    const welcomeComponentData = useMemo(() => {
        return {
            ...welcomeData.kundeklubben,
            titleType: "h2",
            sectionStyles: styles.section,
            containerStyles: styles.container,
            subtitleStyles: styles.subtitle,
        };
    }, []);

    return (
        <>
            <Welcome {...welcomeComponentData} />
            <KundeForm />
        </>
    );
};

export default Kundeklubben;
