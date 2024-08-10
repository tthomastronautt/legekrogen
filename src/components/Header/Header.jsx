import SectionLayout from "@layouts/SectionLayout/SectionLayout";

import Logo from "@components/Logo/Logo";
import Delivery from "@components/Delivery/Delivery";
import Button from "@components/Button/Button";
import NavBar from "@components/NavBar/NavBar";

import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

import styles from "./Header.module.css";
const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const openNavBar = () => setIsActive((prev) => !prev);

    const mergedStylesNavBarBtn = useMemo(
        () => `${styles.burgerMenuBtn} ${isActive ? styles.active : ""}`,
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
                <NavBar isActive={isActive} setIsActive={setIsActive} />
            </SectionLayout>
        </header>
    );
};

export default Header;
