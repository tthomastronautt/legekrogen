import ShoppingCart from "@components/ShoppingCart/ShoppingCart";
import styles from "./ShoppingCartList.module.css";
import { useMemo } from "react";
import { PropTypes } from "prop-types";
import { products } from "@variables/products";

const ShoppingCartList = ({ isActiveShoppingList }) => {
    const mergedStylesShoppingList = useMemo(
        () =>
            `${styles.container} ${
                isActiveShoppingList ? styles.activeShoppingList : ""
            }`,
        [isActiveShoppingList]
    );

    const fullPrice = useMemo(
        () => products.reduce((acc, item) => acc + item.price, 0),
        []
    );

    if (products.length === 0)
        return (
            <div className={mergedStylesShoppingList}>
                <div className={styles.containerEmptyContent}>
                    <span > Der er ingen varer i kurven. </span>
                </div>
            </div>
        );

    return (
        <div className={mergedStylesShoppingList}>
            <div className={styles.containerContent}>
                <ul className={styles.list}>
                    {products.map((item) => (
                        <ShoppingCart key={item._id} {...item} />
                    ))}
                    <li> I alt prise {fullPrice} kr </li>
                </ul>
            </div>
        </div>
    );
};

export default ShoppingCartList;

ShoppingCartList.propTypes = {
    isActiveShoppingList: PropTypes.bool.isRequired,
};
