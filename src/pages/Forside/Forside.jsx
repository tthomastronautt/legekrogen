import Welcome from "@components/Welcome/Welcome";
import { welcomeData } from "@variables/welcomeData.js";
import PronouncesSection from '@components/PronouncesSection/PronouncesSection';

const Forside = () => {
    return (
        <>
            <Welcome
                {...welcomeData.forside}
                titleType="h1"
            />
            <PronouncesSection />
        </>
    );
};

export default Forside;
