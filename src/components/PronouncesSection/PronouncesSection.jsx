import SectionLayout from "@components/layouts/SectionLayout/SectionLayout";
import Title from "@components/Title/Title";
import styles from "./PronouncesSection.module.css";
import Pronounces from "@components/Pronounces/Pronounces";
import HandlerSection from "@components/HandlerSection/HandlerSection";
import { getReviewsAxios } from "@utils/axios";
import useFetchHook from "@hooks/useFetchHook";
const PronouncesSection = () => {
    const HandlserSectionData = useFetchHook(getReviewsAxios);
    
    return (
        <SectionLayout classNameSection={styles.section}>
            <HandlerSection {...HandlserSectionData}>
                <Title className={styles.title} type="h2">
                    Vores kunder
                </Title>
                <p className={styles.subtitle}>UDTALER</p>
                <div className={styles.ronouncesConteiner}>
                    {HandlserSectionData.data.map((review) => (
                        <Pronounces
                            key={review._id}
                            text={review.description}
                            userData={review.name}
                        />
                    ))}
                </div>
            </HandlerSection>
        </SectionLayout>
    );
};

export default PronouncesSection;
