import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import FormPersonData from "@components/FormPersonData/FormPersonData";
import KasseOrdreSection from "@components/KasseOrdreSection/KasseOrdreSection";
import {  useState } from "react";

import styles from "./Kasse.module.css";
import { FormContext } from '@context/FormContext';

const Kasse = () => {
    const initalFormData = {
        firstname: "",
        secondname: "",
        country: "",
        city: "",
        zip: "",
        adress: "",
        email: "",
        phone: "",
        comment:""
    };
    const [formData, setFormData] = useState(initalFormData);
   
    return (
        <SectionLayout classNameContainer={styles.container}>
            <FormContext.Provider value={{ formData, setFormData }}>
                <FormPersonData />
                <KasseOrdreSection />
            </FormContext.Provider>
        </SectionLayout>
    );
};

export default Kasse;
