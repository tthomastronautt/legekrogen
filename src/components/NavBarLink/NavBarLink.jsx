import { NavLink } from "react-router-dom";
import { PropTypes } from 'prop-types';
import styles from "./NavBarLink.module.css";

const NavBarLink = ({ path, name, ...rest }) => {
    return (
        <NavLink
            {...rest}
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