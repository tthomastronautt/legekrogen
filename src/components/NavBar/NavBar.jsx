import NavBarLink from "@components/NavBarLink/NavBarLink";
import styles from "./NavBar.module.css";
import { useMemo } from "react";
import { navlinks } from "@variables/navlinks";
import { PropTypes } from "prop-types";
const NavBar = ({ isActive,setIsActive }) => {
    const mergedStylesNavBar = useMemo(
        () => `${styles.nav} ${isActive ? styles.activeNavBar : ""}`,
        [isActive]
    );

    return (
        <nav className={mergedStylesNavBar}>
            <ul>
                {navlinks.map((link) => (
                    <li key={link.id}>
                        <NavBarLink onClick={() => setIsActive(prev => !prev)} path={link.path} name={link.name} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;

NavBar.propTypes = {
    isActive: PropTypes.bool,
    setIsActive: PropTypes.func
};
