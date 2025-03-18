import BookBtn from "./BookBtn.js";
import SocialLinks from "./SocialLinks.js";

function Hero() {
  return (
    <div>
      <section className="relative w-full h-[800px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/public/4177957-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>

        <section className="container mx-auto px-8 relative z-10 flex flex-col h-full items-start justify-center gap-9">
          <h1 className="text-3xl text-white uppercase font-black tracking-widest">
            Welcome to{" "}
            <strong className="text-secondary">
              THE Brothers Cut
            </strong>{" "}
            <div />
            your home for style and <div />
            beauty.
          </h1>
          <SocialLinks></SocialLinks>
          <BookBtn></BookBtn>
        </section>
      </section>
    </div>
  );
}

export default Hero;
