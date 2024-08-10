import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import { navlinks } from "@variables/navlinks";
import NavBarLink from "@components/NavBarLink/NavBarLink";
import Logo from "@components/Logo/Logo";
import Delivery from "@components/Delivery/Delivery";

import styles from "./Header.module.css";
import Button from "@components/Button/Button";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const openNavBar = () => setIsActive((prev) => !prev);

    const mergedStylesNavBarBtn = useMemo(
        () => `${styles.burgerMenuBtn} ${isActive ? styles.active : ""}`,
        [isActive]
    );

    const mergedStylesNavBar = useMemo(
        () => `${styles.nav} ${isActive ? styles.activeNavBar : ""}`,
        [isActive]
    );

    return (
        <header>
            <Delivery />
            <SectionLayout
                classNameSection={styles.section}
                classNameContainer={styles.container}
            >
                <Link to="/">
                    <Logo width={115} />
                </Link>
                <Button onClick={openNavBar} className={mergedStylesNavBarBtn}>
                    <span></span>
                </Button>
                <nav className={mergedStylesNavBar}>
                    <ul className={styles.ul}>
                        {navlinks.map((link) => (
                            <li key={link.id}>
                                <NavBarLink path={link.path} name={link.name} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </SectionLayout>
        </header>
    );
};

export default Header;
