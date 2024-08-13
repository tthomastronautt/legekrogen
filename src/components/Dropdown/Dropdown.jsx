import { PropTypes } from "prop-types";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./Dropdown.module.css";
import parse from "html-react-parser";

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
