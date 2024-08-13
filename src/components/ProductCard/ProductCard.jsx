import styles from "./productCard.module.css"

const ProductCard = () => {
    const products = [
        {id: 1, imgSrc: "./src/assets/products/product1.jpg", title: "Tandlægesæt i træ", brand: "Tiny Republic Play", price: "849"},
        {id: 2, imgSrc: "./src/assets/products/product2.jpg", title: "Edvin gåvogn", brand: "Kids Concept", price: "499"},
        {id: 3, imgSrc: "./src/assets/products/product3.jpg", title: "Fire på stribe spil", brand: "Vilac", price: "69,30"},
        {id: 4, imgSrc: "./src/assets/products/product4.jpg", title: "Isbod i træ", brand: "Tiny Republic Play", price: "259"},
        {id: 5, imgSrc: "./src/assets/products/product5.jpg", title: "Neo gyngedinosaur", brand: "Kids Concep", price: "749"},
        {id: 6, imgSrc: "./src/assets/products/product6.jpg", title: "Togbane i 50 dele", brand: "BRIO", price: "849"},
    ]

    const listItems = products.map(product => 
        <div key={product.id} className={styles.container}>
            <img src={product.imgSrc} alt={product.title} className={styles.productImg} />
            <p className={styles.brand}>{product.brand}</p>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>{product.price} kr</p>
        </div>
    )

    return(
        listItems
    )
}

export default ProductCard