import Header from "@components/Header/Header";

const IndexLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default IndexLayout;
