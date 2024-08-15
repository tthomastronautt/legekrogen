import styles from "./toyShowcase.module.css"
import SectionLayout from "@components/layouts/SectionLayout/SectionLayout"
import ProductCard from "@components/ProductCard/ProductCard"
import Title from "@components/Title/Title"
import { useMemo } from "react"
import { getProductsAxios } from "@utils/axios"
import useFetchHook from "@hooks/useFetchHook"
import HandlerSection from "@components/HandlerSection/HandlerSection"
import PropTypes from "prop-types";

const ToyShowcase = ({title, isRecommended}) => {
    const productsApiData = useFetchHook(getProductsAxios)
    const recommendedProducts = useMemo(() => {
        return productsApiData.data.filter((product) => {
            return isRecommended ? product.recommended : product
        })
    }, [productsApiData.data, isRecommended])
    
    return(
    <SectionLayout classNameSection={styles.toyShowcase}>
        <Title type="h2" className={styles.title}>{title}</Title>
        <p className={styles.subTitle}>LEGETØJ</p>
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

ToyShowcase.propTypes = {
    isRecommended: PropTypes.bool,
    title: PropTypes.string,
}