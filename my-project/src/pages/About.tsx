import { ABOUT } from "../constans";

function About() {
  return (
    <section id="about">
      {ABOUT.map((about, index) => (
        <div key={index}>
          <h1
            id="#about"
            className="container mx-auto px-8 text-start heading-1 uppercase leading-10 tracking-widest mt-20 mb-20"
          >
            About
          </h1>
          <div className="flex flex-wrap max-lg:flex-col">
            <div className="w-full h-96 lg:w-1/2 bg-white text-black flex flex-col items-center justify-center text-center gap-10 tracking-widest">
              <h3 className="heading-3">{about.ESTABLISHED}</h3>
              <p className="max-w-prose paragraph">{about.TEXT}</p>
            </div>
            <div className="w-full h-96 lg:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="/public/The-best-barbers-in-Camberwell.jpg"
                alt="the barber"
              />
            </div>
            <div className="w-full h-96 lg:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="\public\toolswebp.webp"
                alt="the barber"
              />
            </div>
            <div className="w-full h-96 lg:w-1/2 bg-white text-black flex flex-col items-center justify-center text-center gap-10 tracking-widest">
              <h3 className="heading-3 uppercase">Opening hours</h3>
              <ul className="list-disc text-start">
                {about.openingHours.map((hour, hourIndex) => (
                  <li key={hourIndex} className="mb-1">
                    {hour}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default About;
