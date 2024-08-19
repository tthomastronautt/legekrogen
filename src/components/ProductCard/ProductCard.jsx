import styles from "./productCard.module.css";
import { FaShoppingBasket } from "react-icons/fa";
import { PropTypes } from "prop-types";
import Button from "@components/Button/Button";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { SiMinutemailer } from "react-icons/si";

const ProductCard = ({
    description,
    title,
    price,
    image,
    discountInPercent,
    _id,
}) => {
    const [productsData, saveProductsData] = useLocalStorage(
        "productsData",
        {}
    );
    const [isSending, setIsSending] = useState(false);

    const addToBasket = (id) => {
        if (
            productsData.products &&
            productsData.products.map((product) => product.id).includes(id)
        )
            return;
        setIsSending(true);
        const newProduct = {
            products: productsData.products
                ? [...productsData.products, { id, amount: 1 }]
                : [{ id, amount: 1 }],
        };
        saveProductsData({
            ...productsData,
            ...newProduct,
        });
        setTimeout(() => {
            setIsSending(false);
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <img src={image} alt={description} className={styles.productImg} />
            <p className={styles.brand}>{title}</p>
            <p className={styles.title}>{description}</p>
            <p className={styles.price}>{price} kr</p>
            <div>
                {discountInPercent ? (
                    <div className={styles.discount}>
                        <p>{discountInPercent}%</p>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <Button
                type="button"
                onClick={() => addToBasket(_id)}
                className={styles.button}
            >
                <FaShoppingBasket />
                {isSending && (
                    <div className={styles.sendToBasket}>
                        <SiMinutemailer />
                    </div>
                )}
            </Button>
        </div>
    );
};

export default ProductCard;

ProductCard.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    discountInPercent: PropTypes.number,
    _id: PropTypes.string,
};
