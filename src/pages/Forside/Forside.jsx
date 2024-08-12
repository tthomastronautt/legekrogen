import Welcome from "@components/Welcome/Welcome";
import { welcomeData } from "@variables/welcomeData.js";

const Forside = () => {
    return (
        <>
            <Welcome
                {...welcomeData.forside}
                titleType="h1"
            />
        </>
    );
};

export default Forside;
