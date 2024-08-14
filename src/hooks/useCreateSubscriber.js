import { createSubscriber } from "@utils/axios";
import { useState } from "react";
const useCreateSubscriber = () => {
    const initialFormData = {
        name: "",
        email: "",
        message: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const inputHandler = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitHandler = async (event) => {
        setIsLoading(true);
        setError("");
        event.preventDefault();
        if (
            formData.name === "" ||
            formData.email === "" ||
            formData.message === ""
        ) {
            setError("Feltene er ikke udfyldt");
            setIsLoading(false);
            return;
        }

        try {
            const data = await createSubscriber(formData);
            console.log("🚀 ~ submitHandler ~ data:", data);
            if (data?.created) {
                showPopup();
                setError("");
                return;
            }
            if (data?.message) {
                setError(data.message);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const showPopup = () => {
        alert("succes");
    };

    return { formData, isLoading, error, submitHandler, inputHandler };
};

export default useCreateSubscriber;
