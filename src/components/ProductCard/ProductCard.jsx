import styles from "./productCard.module.css";
import { FaShoppingBasket } from "react-icons/fa";
import { PropTypes } from "prop-types";
import Button from "@components/Button/Button";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductCard = ({
    description,
    title,
    price,
    image,
    discountInPercent,
    _id,
}) => {
    const [productsId, saveProductsId] = useLocalStorage("productsId", []);

    const addToBasket = (id) => {
        if (productsId.includes(id)) return;
        saveProductsId([...productsId, id]);
    };

    return (
        <div className={styles.container}>
            <img src={image} alt={description} className={styles.productImg} />
            <p className={styles.brand}>{title}</p>
            <p className={styles.title}>{description}</p>
            <p className={styles.price}>{price} kr</p>
            <div>{discountInPercent ? <div className={styles.discount}><p>{discountInPercent}%</p></div> : ""}</div>
            <Button
                type="button"
                onClick={() => addToBasket(_id)}
                className={styles.button}
            >
                <FaShoppingBasket />
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
