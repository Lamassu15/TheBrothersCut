import { CiMail, CiLocationArrow1 } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { JSX } from "react";
import { contactLink, contactLinks } from "../constans/data";

const iconMap: { [key: string]: JSX.Element } = {
  CiMail: <CiMail></CiMail>,
  CiLocationArrow1: <CiLocationArrow1></CiLocationArrow1>,
  FiPhone: <FiPhone></FiPhone>,
};

function ContactLinks() {
  return (
    <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
      {contactLinks.map((link: contactLink) => (
        <div
          key={link.id}
          className="flex flex-col items-center justify-center text-center"
        >
          <a className="text-4xl" href={link.url}>
            {iconMap[link.icon]}
          </a>
          <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
            {link.name}
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {link.paragraph}
          </p>
          <p className="mt-2 text-blue-500 dark:text-blue-400">{link.txt}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactLinks;
