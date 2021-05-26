import Hero from "components/Hero";
import Menu from "components/Menu";
import Navbar from "components/Navbar";
import OurChefs from "components/OurChefs";

export default function Index() {
    return (
        <>
            <Navbar />
            <Hero />
            <Menu />
            <OurChefs />
        </>
    );
}
