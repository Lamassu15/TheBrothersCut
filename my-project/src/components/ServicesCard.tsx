import { SERVICES } from "../constans/index";

function ServicesCard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
      {SERVICES.map((service, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-slate-700 transition delay-100 duration-300"
        >
          <div className="text-4xl">{service.icon}</div>
          <h2 className="text-xl font-semibold mt-3">{service.name}</h2>
          <p className="mt-2 text-sm sm:text-base">{service.description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold">{service.price}</span>
            <span className="">{service.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesCard;
