import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import { getQuestionsAxios } from "@utils/axios";
import { useEffect } from "react";
import { useState } from "react";
import Dropdown from "./../Dropdown/Dropdown";
import styles from "./Questions.module.css";
const Questions = () => {
    const [questions, setQuestions] = useState([]);

    const getQuestions = async () => {
        const questions = await getQuestionsAxios();
        setQuestions(questions);
    };

    useEffect(() => {
        getQuestions();
    }, []);

    return (
        <SectionLayout classNameContainer={styles.container}>
            {questions.map((question) => (
                <Dropdown key={question._id} {...question} />
            ))}
        </SectionLayout>
    );
};

export default Questions;
