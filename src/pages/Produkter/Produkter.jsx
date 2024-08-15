import { useMemo } from "react";
import Welcome from "@components/Welcome/Welcome";
import BecomeCustomer from "@components/BecomeCustomer/BecomeCustomer.jsx";
import { welcomeData } from "@variables/welcomeData.js";
import styles from "./Produkter.module.css";
import ToyShowcase from "@components/ToyShowcase/ToyShowcase";
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
    
    const toyShowcaseComponentData = useMemo(() => {
        return {
            title: "Alt vores",
            isRecommended: false,
        }
    })

    return (
        <>
            <Welcome {...welcomeComponentData} />
            <ToyShowcase {...toyShowcaseComponentData} />
            <BecomeCustomer />
        </>
    );
};

export default Produkter;
