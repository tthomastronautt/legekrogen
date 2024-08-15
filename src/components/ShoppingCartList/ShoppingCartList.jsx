import { useMemo } from "react";
import { PropTypes } from "prop-types";
import ShoppingCart from "@components/ShoppingCart/ShoppingCart";
import styles from "./ShoppingCartList.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import useFetchHook from "@hooks/useFetchHook.js";
import { getProductsAxios } from "@utils/axios";
import { IoMdCloseCircle } from "react-icons/io";
import Button from '@components/Button/Button';

const ShoppingCartList = ({ isActiveShoppingList, setIsActiveShoppingList }) => {
    const productsApiData = useFetchHook(getProductsAxios);
    const [productsData] = useLocalStorage("productsData", {});

    const localStorageProducts = useMemo(() => {
        const productAmounts = productsData.products.reduce((acc, product) => {
            acc[product.id] = product.amount;
            return acc;
        }, {});

        return productsApiData.data
            .filter(
                (product) =>
                    productsData.products &&
                    productsData.products.map((p) => p.id).includes(product._id)
            )
            .map((product) => ({
                ...product,
                amount: productAmounts[product._id] || 1,
            }));
    }, [productsApiData.data, productsData]);

    const mergedStylesShoppingList = useMemo(
        () =>
            `${styles.container} ${
                isActiveShoppingList ? styles.activeShoppingList : ""
            }`,
        [isActiveShoppingList]
    );

    const fullPrice = useMemo(
        () => localStorageProducts.reduce((acc, item) => acc + item.price * item.amount	, 0),
        [localStorageProducts]
    );

   

    return (
        <section className={mergedStylesShoppingList}>
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
            
        <Button onClick={ () => setIsActiveShoppingList(false)} className={styles.closeButton} type="button"><IoMdCloseCircle /></Button>
        </section>
    );
};

export default ShoppingCartList;

ShoppingCartList.propTypes = {
    isActiveShoppingList: PropTypes.bool.isRequired,
    setIsActiveShoppingList: PropTypes.func.isRequired,
};
