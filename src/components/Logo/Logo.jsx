import logo from "@assets/logo/legekrogen_logo.png";
import { PropTypes } from "prop-types";
import styles from "./Logo.module.css";
const Logo = ({ width }) => {
    return (
        <img
            className={styles.img}
            width={width}
            src={logo}
            alt="legekrogen_logo"
        />
    );
};

export default Logo;

Logo.propTypes = {
    width: PropTypes.number.isRequired,
};
