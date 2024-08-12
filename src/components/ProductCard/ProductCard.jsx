import styles from "./productCard.module.css"
import { PropTypes } from "prop-types";

const ProductCard = (props) => {
    return(
        <div className={styles.container}>
            <img src={props.img} alt={props.imgTitle} className={styles.productImg} />
            <p className={styles.brand}>{props.brand}</p>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.price}>{props.price} kr</p>
        </div>
    )
}

ProductCard.propTypes = {
    img: PropTypes.string,
    imgTitle: PropTypes.string,
    brand: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
}

export default ProductCard