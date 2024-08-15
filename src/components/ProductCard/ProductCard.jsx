import styles from "./productCard.module.css"
import { FaShoppingBasket } from "react-icons/fa";

const ProductCard = ({description, title, price, image, discountInPercent}) => {

    return(
        <div className={styles.container}>
            <img src={image} alt={description} className={styles.productImg} />
            <p className={styles.brand}>{title}</p>
            <p className={styles.title}>{description}</p>
            <p className={styles.price}>{price} kr</p>
            <div>{discountInPercent ? discountInPercent : ""}</div>
            <button className={styles.button}><FaShoppingBasket /></button>
        </div>
    )
}

export default ProductCard