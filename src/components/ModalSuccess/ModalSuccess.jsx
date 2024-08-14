import { Link } from "react-router-dom";
import styles from "./ModalSuccess.module.css";
import Title from "@components/Title/Title";
import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import { PropTypes } from "prop-types";
const ModalSuccess = ({ setIsOpen }) => {
    return (
        <dialog className={styles.modal}>
            <SectionLayout classNameContainer={styles.content}>
                <Title className={styles.title} type="h1">
                    Tak!
                </Title>
                <p className={styles.text}>
                    Vi er så glade for at du vil være en del af vores kundeklub.
                    Tag et kig i din indbakke. Vi har givet dig fri fragt på din
                    første ordre.
                </p>
                    <Link onClick={() => setIsOpen(false)} to={"/"} className={styles.link}>
                        TIL FORSIDEN
                    </Link>
            </SectionLayout>
        </dialog>
    );
};

export default ModalSuccess;

ModalSuccess.propTypes = {
    setIsOpen: PropTypes.func,
};
