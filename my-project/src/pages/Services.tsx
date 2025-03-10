import ServicesCard from "../components/ServicesCard";
import { SERVICES_PARAGRAPH } from "../constans/index";

function Services() {
  return (
    <section className="container mx-auto px-8" id="services">
      <h1
        id="#Services"
        className="text-start heading-1 font-bold uppercase leading-10 tracking-widest mt-20 mb-20"
      >
        Services
      </h1>
      <div className="flex flex-col items-center">
        <h2 className="heading-2 mb-5">Making You Look & Feel Your Best</h2>
        <p className="w-full lg:w-3/4 text-center paragraph">{SERVICES_PARAGRAPH}</p>
        <ServicesCard></ServicesCard>
      </div>
    </section>
  );
}

export default Services;
