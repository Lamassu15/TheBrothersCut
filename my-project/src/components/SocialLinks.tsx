// src/components/SocialLinks.tsx
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialLinks, SocialLink } from "../constans/index";
import { JSX } from "react";

const iconMap: { [key: string]: JSX.Element } = {
  FaFacebook: <FaFacebook />,
  FaInstagram: <FaInstagram />,
  FaTwitter: <FaXTwitter   />,
};

function SocialLinks() {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link: SocialLink) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl hover:animate-pulse transition"
        >
          {iconMap[link.icon]}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
