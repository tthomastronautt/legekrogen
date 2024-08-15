import { useMemo } from "react";
import { PropTypes } from "prop-types";
import NavBarLink from "@components/NavBarLink/NavBarLink";
import { navlinks } from "@variables/navlinks";
import styles from "./NavBar.module.css";
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
