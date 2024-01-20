import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Doctor = {
  id: number;
  name: string;
  expertise: string;
  city: string;
};

const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [doctors, setDoctors] = useState<Doctor[] | []>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    physioExperience: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cityParam = params.get("city");
    if (cityParam) {
      setFormData((prevData) => ({
        ...prevData,
        city: cityParam,
      }));
    }
  }, [location.search]);

  useEffect(() => {
    if (currentStep > 4 && formData.city) {
      const fetchDoctors = async () => {
        try {
          const resp = await fetch(
            `https://fix-health-api-rajdeep.vercel.app/api/doctors?city=${formData.city}`
          );
          const data: Doctor[] = await resp.json();
          setDoctors(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchDoctors();
    }
  }, [currentStep]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "city") {
      const params = new URLSearchParams(location.search);
      params.set("city", value);
      navigate({ search: params.toString() }, { replace: true });
    }
  };

  const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const handlePrev = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="absolute top-[50%] -translate-y-1/2 ml-6 p-4 bg-neutral-900">
      <h2 className="text-4xl font-semibold text-center my-4">
        Book a Consultation
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {currentStep === 1 && (
          <>
            <div className="form_div">
              <label htmlFor="name" className="form_label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form_input"
              />
            </div>
            <div className="form_div">
              <label htmlFor="phone" className="form_label">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form_input"
              />
            </div>
          </>
        )}
        {currentStep === 2 && (
          <>
            <div className="form_div">
              <label htmlFor="age" className="form_label">
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="form_input"
              />
            </div>
            <div className="form_div">
              <label htmlFor="city" className="form_label">
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="form_input"
              />
            </div>
            <div className="form_div">
              <label htmlFor="company" className="form_label">
                Company:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form_input"
              />
            </div>
          </>
        )}
        {currentStep === 3 && (
          <div className="form_div">
            <label htmlFor="chiefComplaints" className="form_label">
              Chief Complaints:
            </label>
            <textarea
              id="chiefComplaints"
              name="chiefComplaints"
              rows={4}
              cols={30}
              value={formData.chiefComplaints}
              onChange={handleChange}
              required
              className="form_input"
            />
          </div>
        )}
        {currentStep === 4 && (
          <div className="form_div">
            {parseInt(formData.age) >= 40 ? (
              <>
                <label htmlFor="physioExperience" className="form_label">
                  Previous Experience with Physiotherapy:
                </label>
                <textarea
                  rows={4}
                  cols={30}
                  id="physioExperience"
                  name="physioExperience"
                  value={formData.physioExperience}
                  onChange={handleChange}
                  required
                  className="form_input"
                />
              </>
            ) : (
              <p>This section is not applicable for you, please move forward</p>
            )}
          </div>
        )}
        {currentStep === 5 && (
          <div className="form_div flex-col">
            {doctors.length > 0 ? (
              doctors.map((doc) => <p key={doc.id}>{doc.name}</p>)
            ) : (
              <p>No doctors found.. please enter city correctly</p>
            )}
          </div>
        )}
        <div className="flex items-center justify-center gap-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              className="border w-1/4 self-center mt-6 p-1 rounded-md transition-all duration-300 font-medium border-neutral-400 bg-neutral-700 hover:bg-neutral-800"
            >
              Previous
            </button>
          )}
          {currentStep < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="border w-1/4 self-center mt-6 p-1 rounded-md transition-all duration-300 font-medium border-neutral-400 bg-neutral-700 hover:bg-neutral-800"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="border w-1/4 self-center mt-6 p-1 rounded-md transition-all duration-300 font-medium border-neutral-400 bg-neutral-700 hover:bg-slate-600"
            >
              Book Now
            </button>
          )}
        </div>
      </form>
    </section>
  );
};
export default BookingForm;
