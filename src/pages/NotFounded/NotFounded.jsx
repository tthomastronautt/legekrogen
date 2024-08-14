import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import notFounded from "@assets/heros/404.png";
import styles from "./NotFounded.module.css";
const NotFounded = () => {
    return (
        <SectionLayout classNameContainer={styles.container}>
            <img className={styles.img} src={notFounded} alt="" />
        </SectionLayout>
    );
};

export default NotFounded;
