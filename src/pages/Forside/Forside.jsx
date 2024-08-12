import Welcome from "@components/Welcome/Welcome";
import forsidenImg from "@assets/heros/forsiden.jpg";
import { welcomeTitle } from "@variables/welcome-title.js";

const Forside = () => {
    return (
        <>
            <Welcome img={forsidenImg} title={welcomeTitle.forside.title} subtitle={welcomeTitle.forside.subtitle} />
        </>
    );
};

export default Forside;
