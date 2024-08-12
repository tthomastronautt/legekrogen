import styles from "./footer.module.css";

const Footer = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Kundeservice</h1>
            <p className={styles.info}>kontakt@legehjørnet.dk</p>
            <p className={styles.info}>+45 23 45 89</p>
            <h1 className={styles.title}>Følg os</h1>
        </div>
    )
}

export default Footer;