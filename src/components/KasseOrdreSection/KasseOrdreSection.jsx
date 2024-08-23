import Title from "@components/Title/Title";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useMemo, useContext, useState, useRef } from "react";
import useFetchHook from "@hooks/useFetchHook";
import {
    getProductsAxios,
    createOrderAxios,
    getOrderAxiosById,
} from "@utils/axios";
import Button from "@components/Button/Button";
import { FormContext } from "@context/FormContext";
import Loader from "@components/Loader/Loader";

import styles from "./KasseOrdreSection.module.css";
import { IoMdCloseCircle } from "react-icons/io";
const KasseOrdreSection = () => {
    const productsApiData = useFetchHook(getProductsAxios);
    const [productsData, saveProductsData] = useLocalStorage(
        "productsData",
        {}
    );
    const [ordersId, saveOrdersId] = useLocalStorage("ordersId", []);
    const [serverData, setServerData] = useState([]);
    const { formData } = useContext(FormContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const dialogRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState("");

    const allOrders = useMemo(() => {
        return serverData?.map((data) =>
            data?.products.map((product) => {
                const findedProduct = productsApiData.data.find(
                    (p) => p._id === product.id
                );
                return { ...findedProduct, ...product };
            })
        );
    }, [productsApiData.data, serverData]);

    const fetchOrders = async () => {
        const orderPromises = ordersId.map(
            async (id) => await getOrderAxiosById(id)
        );
        const fetchedOrders = await Promise.all(orderPromises);
        const sortedOrders = fetchedOrders.map((order) => order[0]);
        setServerData(sortedOrders);
    };

    const betalOrdre = async () => {
        const allValuesNotEmptyAndStrings = Object.values(formData).every(
            (value) => typeof value === "string" && value !== ""
        );
        if (allValuesNotEmptyAndStrings) {
            setErrorMessage("");
            setIsLoading(true);
            try {
                const newOrder = {
                    email: formData.email,
                    products: productsData.products,
                };
                const data = await createOrderAxios(newOrder);
                saveOrdersId([...ordersId, data._id]);
                saveProductsData(data);
                fetchOrders();
            } catch (error) {
                setError(error.message);
                console.error(error);
            } finally {
                dialogRef.current.showModal();
                setIsLoading(false);
                saveProductsData({ ...productsData, products: [] });
            }
        } else {
            setErrorMessage("Du skal udfylde alle felter");
        }
    };

    const localStorageProducts = useMemo(() => {
        const productAmounts = productsData.products?.reduce((acc, product) => {
            acc[product.id] = product.amount;
            return acc;
        }, {});

        return productsApiData.data
            .filter(
                (product) =>
                    productsData.products &&
                    productsData.products.map((p) => p.id).includes(product._id)
            )
            .map((product) => ({
                ...product,
                amount: productAmounts[product._id] || 1,
            }));
    }, [productsApiData.data, productsData]);

    const fullPrice = useMemo(
        () =>
            localStorageProducts.reduce(
                (acc, item) => acc + item.price * item.amount,
                0
            ),
        [localStorageProducts]
    );

    return (
        <article className={styles.container}>
            {localStorageProducts.length <= 0 && <p>Din ordre er tom</p>}
            {localStorageProducts.length > 0 && (
                <>
                    <Title type="h2">Din ordre</Title>
                    <div className={styles.table}>
                        <div className={styles.row}>
                            <b>Vare</b>
                            <b>Title</b>
                            <b>Description</b>
                            <b className={styles.amount}>Antal</b>
                            <b className={styles.price}>Subtotal</b>
                        </div>
                        {localStorageProducts.map((product) => (
                            <div className={styles.row} key={product._id}>
                                <img
                                    src={product.image}
                                    className={styles.img}
                                    alt=""
                                />
                                <b>{product.title}</b>
                                <span> {product.description} </span>
                                <span className={styles.amount}>
                                    {product.amount}
                                </span>
                                <span className={styles.price}>
                                    {product.price}
                                </span>
                            </div>
                        ))}

                        <div className={styles.row}>
                            <b className={styles.total}>Total</b>
                            <span className={styles.price}>{fullPrice}</span>
                        </div>
                    </div>
                    <Button
                        type="button"
                        onClick={betalOrdre}
                        className={styles.button}
                        disabled={isLoading}
                    >
                        Betal
                        {isLoading && <Loader className={styles.loader} />}
                    </Button>
                    {errorMessage && (
                        <span className={styles.errorMessage}>
                            {errorMessage}
                        </span>
                    )}
                </>
            )}
            <dialog className={styles.dialog} ref={dialogRef}>
                {error && (
                    <>
                        <p className={styles.description}>{error}</p>
                        <Button
                            onClick={() => dialogRef.current.close()}
                            className={styles.closeButton}
                            type="button"
                        >
                            <IoMdCloseCircle />
                        </Button>
                    </>
                )}
                {!error && !isLoading && (
                    <>
                        <Title className={styles.orderTitle} type={"h2"}>
                            Tak for din bestiling
                        </Title>
                        <p className={styles.description}>
                            Din ordre er nu sendt til din e-mail.
                        </p>

                        {allOrders.length > 0 && (
                            <>
                                <b className={styles.orderTitle}>
                                    Tildigere ordre
                                </b>
                                {allOrders.map((orders, i) => {
                                    return (
                                        <div
                                            className={styles.orderContainer}
                                            key={i}
                                        >
                                            <b className={styles.orderTitle}>
                                                Ordre {i + 1}
                                            </b>
                                            <div className={styles.row}>
                                                <b>Image</b>
                                                <b>Title</b>
                                                <b>Description</b>
                                                <b className={styles.amount}>
                                                    Antal
                                                </b>
                                                <b className={styles.price}>
                                                    Price
                                                </b>
                                            </div>
                                            {orders.map((order, index) => {
                                                return (
                                                    <div
                                                        className={styles.row}
                                                        key={index}
                                                    >
                                                        <img
                                                            src={order.image}
                                                            className={
                                                                styles.img
                                                            }
                                                            alt=""
                                                        />
                                                        <b>{order.title}</b>
                                                        <span>
                                                            {order.description}
                                                        </span>
                                                        <span
                                                            className={
                                                                styles.amount
                                                            }
                                                        >
                                                            {order.amount}
                                                        </span>
                                                        <span
                                                            className={
                                                                styles.price
                                                            }
                                                        >
                                                            {order.price}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </>
                        )}

                        <Button
                            onClick={() => dialogRef.current.close()}
                            className={styles.closeButton}
                            type="button"
                        >
                            <IoMdCloseCircle />
                        </Button>
                    </>
                )}
            </dialog>
        </article>
    );
};

export default KasseOrdreSection;
