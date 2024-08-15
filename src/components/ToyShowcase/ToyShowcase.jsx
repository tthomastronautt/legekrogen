import styles from "./toyShowcase.module.css"
import SectionLayout from "@components/layouts/SectionLayout/SectionLayout"
import ProductCard from "@components/ProductCard/ProductCard"
import Title from "@components/Title/Title"
import { useMemo } from "react"
import { getProductsAxios } from "@utils/axios"
import useFetchHook from "@hooks/useFetchHook"
import HandlerSection from "@components/HandlerSection/HandlerSection"

const ToyShowcase = () => {
    const productsApiData = useFetchHook(getProductsAxios)
    const recommendedProducts = useMemo(() => {
        return productsApiData.data.filter((product) => product.recommended)
    }, [productsApiData.data])
    
    return(
    <SectionLayout classNameSection={styles.toyShowcase}>
        <Title type="h2" className={styles.title}>Et udpluk af vores</Title>
        <Title type="h2" className={styles.subTitle}>LEGETØJ</Title>
        <article className={styles.cardContainer}>
            <HandlerSection {...productsApiData} >
                {recommendedProducts.map((product) => {
                    return(
                        <ProductCard key={product._id} {...product}/>
                    )
                })}
            </HandlerSection>
        </article>
    </SectionLayout>
    )
}

export default ToyShowcase