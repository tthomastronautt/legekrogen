import { useMemo } from "react";
import Welcome from "@components/Welcome/Welcome";
import PronouncesSection from "@components/PronouncesSection/PronouncesSection";
import BecomeCustomer from "@components/BecomeCustomer/BecomeCustomer";
import ToyShowcase from "@components/ToyShowcase/ToyShowcase";
import { welcomeData } from "@variables/welcomeData.js";

const Forside = () => {
    const welcomeComponentData = useMemo(() => {
        return {
            ...welcomeData.forside,
            titleType: "h1",
        };
    }, []);
    const toyShowcaseComponentData = useMemo(() => {
        return {
            title: "Et udpluk af vores",
            isRecommended: true,
        }
    }, [])

    return (
        <>
            <Welcome {...welcomeComponentData} />
            <ToyShowcase {...toyShowcaseComponentData}/>
            <PronouncesSection />
            <BecomeCustomer />
        </>
    );
};

export default Forside;
