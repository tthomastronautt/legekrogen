import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import Dropdown from "@components/Dropdown/Dropdown";
import HandlerSection from "@layouts/HandlerSection/HandlerSection";
import { getQuestionsAxios } from "@utils/axios";
import useFetchHook from "@hooks/useFetchHook.js";
import styles from "./Questions.module.css";
const Questions = () => {
    const HandlserSectionData = useFetchHook(getQuestionsAxios);

    return (
        <SectionLayout classNameContainer={styles.container}>
            <HandlerSection {...HandlserSectionData}>
                {HandlserSectionData.data.map((question) => (
                    <Dropdown key={question._id} {...question} />
                ))}
            </HandlerSection>
        </SectionLayout>
    );
};

export default Questions;
