import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./footer.module.css";
import Title from "@components/Title/Title"

const Footer = () => {
    return(
        <footer className={styles.container}>
            <Title type="h2" className={styles.title}>Kundeservice</Title>
            <a  href="mailto:kontakt@legehjørnet.dk" className={styles.info}><MdOutlineEmail /> kontakt@legehjørnet.dk</a>
            <a  href="+45 23 45 67 89" className={styles.info}><FaPhoneAlt /> +45 23 45 67 89</a>
            <Title type="h2" className={styles.title}>Følg os</Title>
            <article className={styles.socialContainer}>
                <a className={styles.social} href="https://www.facebook.com/" target="_blank"><p><FaFacebook /></p></a>
                <a className={styles.social} href="https://www.instagram.com/" target="_blank"><p><FaInstagram /></p></a>
            </article>
        </footer>
    )
}

export default Footer;