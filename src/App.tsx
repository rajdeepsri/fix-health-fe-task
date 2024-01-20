import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Hero />
      <BookingForm />
      <Testimonials />
    </main>
  );
};

export default App;
