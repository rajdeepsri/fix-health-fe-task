import dummy from "../assets/dummy.jpg";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col gap-4 w-[15rem] bg-neutral-800 rounded-sm overflow-hidden">
      <img src={dummy} alt="dummy doctor" className="w-full" />
      <div className="flex flex-col gap-1 px-2">
        <h6 className="font-medium text-lg">Dr. Rajdeep Singh</h6>
        <p className="font-light text-gray-300">M.Sc (Nuero Rehabilition)</p>
        <p className="font-light text-gray-300">14 years of experience</p>
      </div>
      <button className="border p-1 my-2 mx-3 rounded-md transition-all duration-300 hover:bg-neutral-700">
        Know More
      </button>
    </div>
  );
};
export default TestimonialCard;
