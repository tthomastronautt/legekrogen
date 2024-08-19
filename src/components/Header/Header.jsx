import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { MdShoppingCart } from "react-icons/md";

import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import Logo from "@components/Logo/Logo";
import Delivery from "@components/Delivery/Delivery";
import Button from "@components/Button/Button";
import NavBar from "@components/NavBar/NavBar";
import ShoppingCartList from "@components/ShoppingCartList/ShoppingCartList";
import { useLocalStorage } from "@uidotdev/usehooks";

import styles from "./Header.module.css";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isActiveShoppingList, setIsActiveShoppingList] = useState(false);
    const [productsData] = useLocalStorage("productsData", {});

    const openNavBar = () => setIsActive((prev) => !prev);

    const mergedStylesNavBarBtn = useMemo(
        () => `${styles.burgerMenuBtn} ${isActive ? styles.active : ""}`,
        [isActive]
    );
    const mergedStylesShoppingCartBtn = useMemo(
        () =>
            `${styles.shoppingCartBtn} ${
                productsData?.products && productsData?.products.length > 0
                    ? styles.notTomShoppingCart
                    : ""
            }`,
        [productsData?.products]
    );

    const shoppingListProps = useMemo(() => {
        return {
            isActiveShoppingList,
            setIsActiveShoppingList,
        };
    }, [isActiveShoppingList]);

    return (
        <header>
            <Delivery />
            <SectionLayout
                classNameSection={styles.section}
                classNameContainer={styles.container}
            >
                <Link
                    onClick={() => setIsActive(false)}
                    className={styles.linkLogo}
                    to="/"
                >
                    <Logo width={115} />
                </Link>
                <Button
                    data-value={productsData?.products?.length}
                    onClick={() => setIsActiveShoppingList((prev) => !prev)}
                    className={mergedStylesShoppingCartBtn}
                >
                    <MdShoppingCart />
                </Button>
                <Button onClick={openNavBar} className={mergedStylesNavBarBtn}>
                    <span></span>
                </Button>
                <NavBar isActive={isActive} setIsActive={setIsActive} />
                <ShoppingCartList {...shoppingListProps} />
            </SectionLayout>
        </header>
    );
};

export default Header;
