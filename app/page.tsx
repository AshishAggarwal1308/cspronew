"use client";
import Hero from "@/app/Components/Hero";
import Intro from "@/app/Components/Intro";
import ServiceDetails from "./Components/Services";
import Expertise from "./Components/Experise";
import Workflows from "./Components/Workflows";
import Contact from "./Components/Contactus";
import GlobalDemo from "./Components/WeService";
import InfiniteMovingCardsDemo from "./Components/OurClients";
import FAQSection from "./Components/Faq";
import Map from "./Components/Map";
// import Ticker from "./Components/Certificate/Page";
// import TickerTape from "./Components/Ticker/Page";
import { Description } from "@mui/icons-material";

export default function Page() {

  return (
    <div>
      <title>CSProTechnology - Empowering Innovation in Technology Solutions</title>
      <meta name="description" content="Discover CSProTechnology commitment to delivering innovative technology solutions. Explore our services, expertise, and how we can help transform your business." />
      <Hero />
      {/* <TickerTape/> */}
      <Intro />
      <ServiceDetails />
      <Workflows />
      <GlobalDemo /> 
      <InfiniteMovingCardsDemo />
      <FAQSection />
      {/* <Ticker/> */}
      <Map />
    </div>
  );
}
