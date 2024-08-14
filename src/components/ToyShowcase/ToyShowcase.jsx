import styles from "./toyShowcase.module.css"
import SectionLayout from "@components/layouts/SectionLayout/SectionLayout"
import ProductCard from "@components/ProductCard/ProductCard"
import Title from "@components/Title/Title"

const ToyShowcase = () => {
    return(
    <SectionLayout classNameSection={styles.toyShowcase}>
        <Title type="h2" className={styles.title}>Et udpluk af vores</Title>
        <Title type="h2" className={styles.subTitle}>LEGETØJ</Title>
        <div className={styles.cardContainer}>
            <ProductCard />
        </div>
    </SectionLayout>
    )
}

export default ToyShowcase