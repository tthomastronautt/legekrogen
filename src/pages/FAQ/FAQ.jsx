import { useMemo } from "react";
import Welcome from "@components/Welcome/Welcome";
import Questions from "@components/Questions/Questions";
import { welcomeData } from "@variables/welcomeData.js";
import styles from "./FAQ.module.css";
const Faq = () => {
    const welcomeComponentData = useMemo(() => {
        return {
            ...welcomeData.faq,
            titleType: "h2",
            sectionStyles: styles.section,
            containerStyles: styles.container,
            subtitleStyles: styles.subtitle,
        };
    }, []);

    return (
        <>
            <Welcome {...welcomeComponentData} />
            <Questions />
        </>
    );
};

export default Faq;
