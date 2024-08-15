import { PropTypes } from 'prop-types';
import styles from "./ShoppingCart.module.css";
const ShoppingCart = ({ title, description, image, price }) => {
    return (
        <li className={styles.cart}>
            <img className={styles.img} src={image} alt="product" />
            <div>
                <p className={styles.textOne}>{title}</p>
                <p className={styles.textTwo}> {description} </p>
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
    price: PropTypes.number.isRequired
}