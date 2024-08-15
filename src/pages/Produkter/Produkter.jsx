import { useMemo } from "react";
import Welcome from "@components/Welcome/Welcome";
import BecomeCustomer from "@components/BecomeCustomer/BecomeCustomer.jsx";
import { welcomeData } from "@variables/welcomeData.js";
import styles from "./Produkter.module.css";
const Produkter = () => {
    const welcomeComponentData = useMemo(() => {
        return {
            ...welcomeData.produkter,
            titleType: "h2",
            sectionStyles: styles.section,
            containerStyles: styles.container,
            subtitleStyles: styles.subtitle,
        };
    }, []);

    return (
        <>
            <Welcome {...welcomeComponentData} />
            <BecomeCustomer />
        </>
    );
};

export default Produkter;
