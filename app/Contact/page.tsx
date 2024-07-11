import ContactCards from "../Components/ContacCard";
import ContactIntro from "../Components/ContactIntro";
import Contact from "../Components/Contactus";
import FAQSection from "../Components/Faq";


export default function page() {
  return (
    <div>
        <title>Contact CSProTechnology - Reach Out for Innovative Solutions</title>
        <meta name="description" content="Contact CSProTechnology to explore our innovative technology solutions. Reach out to us for inquiries, collaborations, or any assistance you need." />
        <ContactIntro />
        <ContactCards />
        <Contact />
        <FAQSection />
    </div>
  )
}
