import Input from "@components/Input/Input";
import styles from "./FormPersonData.module.css";
import Title from "@components/Title/Title";
import { useContext } from "react";
import { FormContext } from '@context/FormContext';
const FormPersonData = () => {
    const { formData, setFormData } = useContext(FormContext);

    const dataHnandler = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form className={styles.form}>
            <Title type="h2"> Faktureringsoplysninger </Title>
            <Input
                placeholder="Fornavn"
                name="firstname"
                type="text"
                onChange={dataHnandler}
                value={formData.firstname}
            />
            <Input
                placeholder="Efternavn"
                name="secondname"
                type="text"
                onChange={dataHnandler}
                value={formData.secondname}
            />
            <Input
                placeholder="Land"
                name="country"
                type="text"
                onChange={dataHnandler}
                value={formData.country}
            />
            <Input
                placeholder="By"
                name="city"
                type="text"
                onChange={dataHnandler}
                value={formData.city}
            />
            <Input
                placeholder="Postnummer"
                name="zip"
                type="text"
                onChange={dataHnandler}
                value={formData.zip}
            />
            <Input
                placeholder="Address"
                name="adress"
                type="text"
                onChange={dataHnandler}
                value={formData.adress}
            />
            <Input
                placeholder="Email"
                name="email"
                type="email"
                onChange={dataHnandler}
                value={formData.email}
            />
            <Input
                placeholder="Telefon"
                name="phone"
                type="text"
                onChange={dataHnandler}
                value={formData.phone}
            />
            <textarea
                className={styles.textarea}
                placeholder="Kommentar"
                name="comment"
                onChange={dataHnandler}
                value={formData.comment}
            />
        </form>
    );
};

export default FormPersonData;
