import { PropTypes } from "prop-types";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useLocalStorage } from "@uidotdev/usehooks";

import Button from "@components/Button/Button";
import styles from "./ShoppingCart.module.css";
const ShoppingCart = ({ title, description, image, price, amount, _id }) => {
    const [productsData, saveProductsData] = useLocalStorage(
        "productsData",
        {}
    );

    const handleAmount = (e) => {
        const value = e.target.closest("button").dataset.value;

        saveProductsData({
            ...productsData,
            products: productsData.products
                .map((product) =>
                    product.id === _id
                        ? {
                              ...product,
                              amount:
                                  value === "-"
                                      ? product.amount - 1
                                      : product.amount + 1,
                          }
                        : product
                )
                .filter((product) => product.amount > 0),
        });
    };
    return (
        <li className={styles.cart}>
            <img className={styles.img} src={image} alt="product" />
            <div className={styles.textContainer}>
                <p className={styles.textOne}>{title}</p>
                <p className={styles.textTwo}>{description}</p>
            </div>
            <div className={styles.buttons}>
                <Button
                    data-value={"-"}
                    onClick={handleAmount}
                    className={styles.button}
                    type="button"
                >
                    <CiCircleMinus />
                </Button>
                {amount}
                <Button
                    data-value={"+"}
                    onClick={handleAmount}
                    className={styles.button}
                    type="button"
                >
                    <CiCirclePlus />
                </Button>
            </div>
            <span className={styles.price}>{price} kr</span>
        </li>
    );
};

export default ShoppingCart;

ShoppingCart.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number,
    _id: PropTypes.string,
};
