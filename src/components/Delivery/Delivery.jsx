import { FaTruck } from "react-icons/fa";
import styles from "./Delivery.module.css";
const Delivery = () => {
    return (
        <section className={styles.delivery}>
            <FaTruck />
            <span className={styles.text}>Fri fragt ved køb over 499,-</span>
        </section>
    );
};

export default Delivery;
