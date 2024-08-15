import { PropTypes } from "prop-types";
import { IoIosArrowUp } from "react-icons/io";
import parse from "html-react-parser";
import styles from "./Dropdown.module.css";

const Dropdown = ({ question, answer }) => {
    return (
        <details className={styles.dropdown}>
            <summary className={styles.question}>
                {question}
                <IoIosArrowUp />
            </summary>
            <div className={styles.answer}>{parse(answer)}</div>
        </details>
    );
};

export default Dropdown;

Dropdown.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};
