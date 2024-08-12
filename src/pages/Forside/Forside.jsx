import Welcome from "@components/Welcome/Welcome";
import forsidenImg from "@assets/heros/forsiden.jpg";
import { welcomeTitle } from "@variables/welcome-title.js";

const Forside = () => {
    return (
        <>
            <Welcome
                {...welcomeData.forside}
                titleType="h1"
            />
            <PronouncesSection />
            <BecomeCustomer/>
            <ToyShowcase />
        </>
    );
};

export default Forside;
