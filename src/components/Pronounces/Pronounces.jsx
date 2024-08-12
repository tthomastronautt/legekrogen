import Title from '@components/Title/Title';
import { PropTypes } from 'prop-types';
import styles from "./Pronounces.module.css";
const Pronounces = ({ text, userData}) => {
  return (
      <article className={styles.container}>
          <p className={styles.text}> {text} </p>
          <Title className={styles.title} type="h3"> {userData} </Title>
    </article>
  )
}

export default Pronounces

Pronounces.propTypes = {
    text: PropTypes.string,
    userData: PropTypes.string
}