import SectionLayout from "@components/layouts/SectionLayout/SectionLayout";
import Title from "@components/Title/Title";
import styles from "./PronouncesSection.module.css";
import { useEffect, useState } from "react";
import { getReviewsAxios } from "@utils/axios";
import Pronounces from "@components/Pronounces/Pronounces";
const PronouncesSection = () => {
    const [reviews, setReviews] = useState([]);

    const getReviews = async () => {
        const data = await getReviewsAxios();
        setReviews(data);
    };

    useEffect(() => {
        getReviews();
    }, []);

    return (
        <SectionLayout classNameSection={styles.section}>
            <Title className={styles.title} type="h2">
                Vores kunder
            </Title>
            <p className={styles.subtitle}>UDTALER</p>
            <div className={styles.ronouncesConteiner}>
                {reviews.map((review) => (
                    <Pronounces
                        key={review.id}
                        text={review.description}
                        userData={review.name}
                    />
                ))}
            </div>
        </SectionLayout>
    );
};

export default PronouncesSection;
