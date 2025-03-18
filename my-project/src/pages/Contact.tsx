import ContactLinks from "../components/ContactLinks";
import { contactUsHeading, contactUsParagraph } from "../constans/index";

function Contact() {
  return (
    <section className="container mx-auto px-8 mb-20" id="contact">
      <h1
        id="#Contact"
        className="text-start heading-1 uppercase leading-10 tracking-widest mt-20 mb-20"
      >
        Contact
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-full lg:w-3/4 text-center">
          <h2 className="heading-2 mb-5">{contactUsHeading}</h2>
          <p className="paragraph">{contactUsParagraph}</p>
        </div>
        <ContactLinks></ContactLinks>
      </div>
    </section>
  );
}

export default Contact;
