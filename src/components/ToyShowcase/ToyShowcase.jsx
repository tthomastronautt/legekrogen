import styles from "./toyShowcase.module.css"
import SectionLayout from "@components/layouts/SectionLayout/SectionLayout.jsx"
import ProductCard from "@components/ProductCard/ProductCard.jsx";
import product1 from "@assets/products/product1.jpg"
import Title from "@components/Title/Title.jsx"

const ToyShowcase = () => {
    return(
    <SectionLayout classNameSection={styles.toyShowcase}>
        <Title type="h2" className={styles.title}>Et udpluk af vores</Title>
        <Title type="h2" className={styles.subTitle}>LEGETØJ</Title>
        <div className={styles.cardContainer}>
            <ProductCard img={product1} imgTitle={"Tandlægesæt i træ"} brand={"Tiny Republic Play"} title={"Tandlægesæt i træ"} price={849} />
            <ProductCard img={product1} imgTitle={"Tandlægesæt i træ"} brand={"Tiny Republic Play"} title={"Tandlægesæt i træ"} price={849} />
            <ProductCard img={product1} imgTitle={"Tandlægesæt i træ"} brand={"Tiny Republic Play"} title={"Tandlægesæt i træ"} price={849} />
        </div>
    </SectionLayout>
    )
}

export default ToyShowcase