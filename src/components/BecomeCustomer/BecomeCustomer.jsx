import { Link } from "react-router-dom";
import styles from "./BecomeCustomer.module.css"
import SectionLayout from '@layouts/SectionLayout/SectionLayout';
import Title from '@components/Title/Title';
const BecomeCustomer = () => {
  return (
      <SectionLayout classNameSection={styles.section}>
          <p className={styles.info}>Kunne du også tænke dig at blive medlem af vores</p>
          <Title type="h1" className={styles.title}>Kundeservice</Title>
          <Link to={"/kundeklubben"} className={styles.link}>Bliv medlem nu!</Link>
    </SectionLayout>
  )
}

export default BecomeCustomer