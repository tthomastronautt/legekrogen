import styles from "./NavBarLink.module.css";
import { NavLink } from "react-router-dom";
import { PropTypes } from 'prop-types';

const NavBarLink = ({ path, name }) => {
    return (
        <NavLink
            className={({ isActive }) => {
                return `${styles.link} ${isActive ? styles.active : ""}`;
            }}
            to={path}
        >
            {name}
        </NavLink>
    );
};

export default NavBarLink;

NavBarLink.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}