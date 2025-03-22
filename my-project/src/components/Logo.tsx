const LogoMain = "/logo.png";

function Logo() {
  return (
    <div className="flex justify-center">
      <a href="index.html">
        <img
          className="w-fit h-[150px] object-fill"
          src={LogoMain}
          alt="Company Logo"
        />
      </a>
    </div>
  );
}

export default Logo;
