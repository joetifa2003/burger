import Hero from "components/Hero";
import Navbar from "components/Navbar";
import Section from "components/UI/Section";

export default function Index() {
    return (
        <>
            <Navbar />
            <Hero />
            <Section fullscreen></Section>
        </>
    );
}
