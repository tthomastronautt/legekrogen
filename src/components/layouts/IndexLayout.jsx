import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import { PropTypes } from "prop-types";

const IndexLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default IndexLayout;

IndexLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
