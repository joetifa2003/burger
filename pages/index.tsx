import Navbar from "components/Navbar";
import Footer from "components/Sections/Footer";
import Hero from "components/Sections/Hero";
import Menu from "components/Sections/Menu";
import OurChefs from "components/Sections/OurChefs";
import ScrollToTop from "components/UI/ScrollToTop";
import { NextSeo } from "next-seo";
import { Element } from "react-scroll";

const SEO = {
    title: "Burgerino",
    descreption: "The best burgers you will ever find.",
};

export default function Index() {
    return (
        <>
            <NextSeo title={SEO.title} description={SEO.descreption} />
            <Navbar />
            <ScrollToTop />
            <Hero />
            <Element name="Menu">
                <Menu />
            </Element>
            <Element name="Our chefs">
                <OurChefs />
            </Element>
            <Footer />
        </>
    );
}
