const LogoMain = "/logo.png";

function Logo() {
  return (
    <div className="flex justify-start">
      <a href="index.html">
        <img
          className="w-fit h-[120px] max-lg:h-[100px] object-fill"
          src={LogoMain}
          alt="Company Logo"
        />
      </a>
    </div>
  );
}

export default Logo;
