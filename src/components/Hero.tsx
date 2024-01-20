import hero_image from "../assets/doctor.jpg";

const Hero = () => {
  return (
    <section className="h-screen relative">
      <img
        src={hero_image}
        alt="doctor"
        className="w-full h-full object-cover"
      />
    </section>
  );
};
export default Hero;
