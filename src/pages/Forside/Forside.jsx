import Welcome from "@components/Welcome/Welcome";
import { welcomeData } from "@variables/welcomeData.js";
import PronouncesSection from "@components/PronouncesSection/PronouncesSection.jsx"
import BecomeCustomer from "@components/BecomeCustomer/BecomeCustomer.jsx"
import ToyShowcase from "@components/ToyShowcase/ToyShowcase";

const Forside = () => {
    return (
        <>
            <Welcome
                {...welcomeData.forside}
                titleType="h1"
            />
            <ToyShowcase />
            <PronouncesSection />
            <BecomeCustomer/>
        </>
    );
};

export default Forside;
