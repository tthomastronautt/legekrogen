import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./footer.module.css";
import Title from "@components/Title/Title.jsx"

const Footer = () => {
    return(
        <div className={styles.container}>
            <Title type="h2" className={styles.title}>Kundeservice</Title>
            <p className={styles.info}><MdOutlineEmail />kontakt@legehjørnet.dk</p>
            <p className={styles.info}><FaPhoneAlt /> +45 23 45 89</p>
            <Title type="h2" className={styles.title}>Følg os</Title>
            <Title type="h1" className={styles.social}>
                <FaFacebook />
                <FaInstagram />
            </Title>
        </div>
    )
}

export default Footer;