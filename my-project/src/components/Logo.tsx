import LogoMain from "../assets/Logo.png";

function Logo() {
  return (
    <div className="flex justify-center">
      <a href="index.html">
        <img
          className="w-fit h-[120px] object-cover"
          src={LogoMain}
          alt="Company Logo"
        />
      </a>
    </div>
  );
}

export default Logo;
