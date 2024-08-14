import SectionLayout from "@layouts/SectionLayout/SectionLayout";
import Button from "@components/Button/Button";
import styles from "./KundeForm.module.css";

import Loader from "@components/Loader/Loader";
import useCreateSubscriber from "@/hooks/useCreateSubscriber";
import ModalSuccess from "@components/ModalSuccess/ModalSuccess";
const KundeForm = () => {
    const {
        formData,
        isLoading,
        error,
        submitHandler,
        inputHandler,
        isOpen,
        setIsOpen
    } = useCreateSubscriber();

    return (
        <SectionLayout>
            <form onSubmit={submitHandler} className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Fulde navn"
                    value={formData.name}
                    onChange={inputHandler}
                />
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={inputHandler}
                />
                <textarea
                    className={styles.input}
                    placeholder="Hvem køber du legetøj til?"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={inputHandler}
                />
                <Button
                    disabled={isLoading}
                    type="submit"
                    className={styles.button}
                >
                    {isLoading ? (
                        <>
                            BLIV MEDLEM NU!
                            <Loader className={styles.loader} />
                        </>
                    ) : (
                        "BLIV MEDLEM NU!"
                    )}
                </Button>

                {error && <p className={styles.error}>{error}</p>}
            </form>
            {isOpen && <ModalSuccess setIsOpen={setIsOpen} />}
        </SectionLayout>
    );
};

export default KundeForm;
