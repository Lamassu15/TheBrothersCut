import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="bg-secondary p-20">
      <div className="container mx-auto px-8 flex justify-between items-center text-black">
        <p className="text-xs font-black  uppercase leading-3 tracking-widest">
          © 2025 the brothers cut, Inc. All rights reserved.
        </p>
        <SocialLinks></SocialLinks>
      </div>
    </footer>
  );
}

export default Footer;
