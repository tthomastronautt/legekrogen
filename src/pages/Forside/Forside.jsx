import Welcome from "@components/Welcome/Welcome";
import forsidenImg from "@assets/heros/forsiden.jpg";
import { welcomeTitle } from "@variables/welcome-title.js";
import ToyShowcase from "@components/ToyShowcase/ToyShowcase";

const Forside = () => {
    return (
        <>
            <Welcome img={forsidenImg} title={welcomeTitle.forside.title} subtitle={welcomeTitle.forside.subtitle} />
            <ToyShowcase />
        </>
    );
};

export default Forside;
