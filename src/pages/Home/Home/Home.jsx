import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ContactInfo from "../ContactInfo/ContactInfo";
import ServiceArea from "../ServiceArea/ServiceArea/ServiceArea";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServiceArea></ServiceArea>
            <ContactInfo></ContactInfo>
        </>
    );
};

export default Home;