import { useMemo } from "react";
import { PropTypes } from "prop-types";
import ShoppingCart from "@components/ShoppingCart/ShoppingCart";
import styles from "./ShoppingCartList.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import useFetchHook from "@hooks/useFetchHook.js";
import { getProductsAxios } from "@utils/axios";

const ShoppingCartList = ({ isActiveShoppingList }) => {
    const productsApiData = useFetchHook(getProductsAxios);
    const [productsId] = useLocalStorage("productsId", []);
    const localStorageProducts = useMemo(() => {
        return productsApiData.data.filter((product) =>
            productsId.includes(product._id)
        );
    }, [productsApiData.data, productsId]);

    const mergedStylesShoppingList = useMemo(
        () =>
            `${styles.container} ${
                isActiveShoppingList ? styles.activeShoppingList : ""
            }`,
        [isActiveShoppingList]
    );

    const fullPrice = useMemo(
        () => localStorageProducts.reduce((acc, item) => acc + item.price, 0),
        [localStorageProducts]
    );

    return (
        <seciton className={mergedStylesShoppingList}>
            <article
                className={
                    localStorageProducts.length
                        ? styles.containerContent
                        : styles.containerEmptyContent
                }
            >
                {localStorageProducts.length ? (
                    <ul className={styles.list}>
                        {localStorageProducts.map((item) => (
                            <ShoppingCart key={item._id} {...item} />
                        ))}
                        <li>I alt prise {fullPrice} kr</li>
                    </ul>
                ) : (
                    <span>Der er ingen varer i kurven.</span>
                )}
            </article>
        </seciton>
    );
};

export default ShoppingCartList;

ShoppingCartList.propTypes = {
    isActiveShoppingList: PropTypes.bool.isRequired,
};
