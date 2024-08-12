import Welcome from "@components/Welcome/Welcome";
import { welcomeData } from "@variables/welcomeData.js";
import PronouncesSection from '@components/PronouncesSection/PronouncesSection';
import BecomeCustomer from '@components/BecomeCustomer/BecomeCustomer';

const Forside = () => {
    return (
        <>
            <Welcome
                {...welcomeData.forside}
                titleType="h1"
            />
            <PronouncesSection />
            <BecomeCustomer/>
        </>
    );
};

export default Forside;
