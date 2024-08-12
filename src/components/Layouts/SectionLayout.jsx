import { PropTypes } from "prop-types";
const SectionLayout = ({ children }) => {
    return (
        <section>
            <div className="container">{children}</div>
        </section>
    );
};

export default SectionLayout;

SectionLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
