import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="py-10">
      <h2 className="text-center text-5xl font-semibold my-8">
        Meet Our Experts
      </h2>
      <div className="flex items-center justify-center gap-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};
export default Testimonials;
