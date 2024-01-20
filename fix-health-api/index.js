const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

app.use(cors());

const doctors = [
  { id: 1, name: "Dr. Aarav Patel", expertise: "Cardiology", city: "Mumbai" },
  { id: 2, name: "Dr. Aditi Kapoor", expertise: "Dermatology", city: "Delhi" },
  {
    id: 3,
    name: "Dr. Advait Singh",
    expertise: "Orthopedics",
    city: "Bangalore",
  },
  {
    id: 4,
    name: "Dr. Akanksha Sharma",
    expertise: "Pediatrics",
    city: "Chennai",
  },
  { id: 5, name: "Dr. Ananya Raj", expertise: "Neurology", city: "Hyderabad" },
  {
    id: 6,
    name: "Dr. Arjun Mehra",
    expertise: "Gastroenterology",
    city: "Kolkata",
  },
  {
    id: 7,
    name: "Dr. Avni Choudhary",
    expertise: "Ophthalmology",
    city: "Ahmedabad",
  },
  { id: 8, name: "Dr. Ayush Verma", expertise: "ENT", city: "Pune" },
  { id: 9, name: "Dr. Bhavya Gupta", expertise: "Cardiology", city: "Jaipur" },
  { id: 10, name: "Dr. Dev Khanna", expertise: "Dermatology", city: "Lucknow" },
  {
    id: 11,
    name: "Dr. Esha Reddy",
    expertise: "Orthopedics",
    city: "Chandigarh",
  },
  { id: 12, name: "Dr. Farhan Khan", expertise: "Pediatrics", city: "Bhopal" },
  { id: 13, name: "Dr. Gauri Desai", expertise: "Neurology", city: "Indore" },
  {
    id: 14,
    name: "Dr. Harsh Joshi",
    expertise: "Gastroenterology",
    city: "Kochi",
  },
  {
    id: 15,
    name: "Dr. Isha Singh",
    expertise: "Ophthalmology",
    city: "Coimbatore",
  },
  { id: 16, name: "Dr. Jai Mehta", expertise: "ENT", city: "Vadodara" },
  { id: 17, name: "Dr. Kavya Kapoor", expertise: "Cardiology", city: "Surat" },
  { id: 18, name: "Dr. Laxmi Yadav", expertise: "Dermatology", city: "Nagpur" },
  {
    id: 19,
    name: "Dr. Mohan Sharma",
    expertise: "Orthopedics",
    city: "Patiala",
  },
  {
    id: 20,
    name: "Dr. Neha Malhotra",
    expertise: "Pediatrics",
    city: "Amritsar",
  },
  {
    id: 21,
    name: "Dr. Omkar Gupta",
    expertise: "Neurology",
    city: "Trivandrum",
  },
  {
    id: 22,
    name: "Dr. Pooja Saxena",
    expertise: "Gastroenterology",
    city: "Goa",
  },
  {
    id: 23,
    name: "Dr. Rahul Nair",
    expertise: "Ophthalmology",
    city: "Pondicherry",
  },
  { id: 24, name: "Dr. Sakshi Patel", expertise: "ENT", city: "Nashik" },
  { id: 25, name: "Dr. Tarun Reddy", expertise: "Cardiology", city: "Ranchi" },
  {
    id: 26,
    name: "Dr. Urvashi Deshmukh",
    expertise: "Dermatology",
    city: "Jodhpur",
  },
  { id: 27, name: "Dr. Vimal Kapoor", expertise: "Orthopedics", city: "Agra" },
  {
    id: 28,
    name: "Dr. Yash Khanna",
    expertise: "Pediatrics",
    city: "Varanasi",
  },
  { id: 29, name: "Dr. Zara Sheikh", expertise: "Neurology", city: "Patna" },
  {
    id: 30,
    name: "Dr. Aryan Verma",
    expertise: "Gastroenterology",
    city: "Raipur",
  },
  {
    id: 31,
    name: "Dr. Bhoomi Mehta",
    expertise: "Ophthalmology",
    city: "Dehradun",
  },
  { id: 32, name: "Dr. Chetan Joshi", expertise: "ENT", city: "Guwahati" },
  { id: 33, name: "Dr. Diya Singh", expertise: "Cardiology", city: "Shillong" },
  { id: 34, name: "Dr. Eesha Roy", expertise: "Dermatology", city: "Imphal" },
  {
    id: 35,
    name: "Dr. Farida Khan",
    expertise: "Orthopedics",
    city: "Agartala",
  },
  { id: 36, name: "Dr. Gopal Das", expertise: "Pediatrics", city: "Gangtok" },
  {
    id: 37,
    name: "Dr. Harpreet Kaur",
    expertise: "Neurology",
    city: "Itanagar",
  },
  {
    id: 38,
    name: "Dr. Irfan Ali",
    expertise: "Gastroenterology",
    city: "Dispur",
  },
  {
    id: 39,
    name: "Dr. Jyoti Sharma",
    expertise: "Ophthalmology",
    city: "Kohima",
  },
  { id: 40, name: "Dr. Kunal Bhatia", expertise: "ENT", city: "Aizawl" },
  {
    id: 41,
    name: "Dr. Leela Rao",
    expertise: "Cardiology",
    city: "Bhubaneswar",
  },
  { id: 42, name: "Dr. Manish Jain", expertise: "Dermatology", city: "Jaipur" },
  {
    id: 43,
    name: "Dr. Nandini Mehra",
    expertise: "Orthopedics",
    city: "Chennai",
  },
  {
    id: 44,
    name: "Dr. Om Prakash",
    expertise: "Pediatrics",
    city: "Hyderabad",
  },
  { id: 45, name: "Dr. Poonam Verma", expertise: "Neurology", city: "Kolkata" },
  {
    id: 46,
    name: "Dr. Rahul Kapoor",
    expertise: "Gastroenterology",
    city: "Bhopal",
  },
  {
    id: 47,
    name: "Dr. Sneha Sharma",
    expertise: "Ophthalmology",
    city: "Lucknow",
  },
  { id: 48, name: "Dr. Tanya Gupta", expertise: "ENT", city: "Chandigarh" },
  { id: 49, name: "Dr. Uday Mehta", expertise: "Cardiology", city: "Delhi" },
  { id: 50, name: "Dr. Vihan Reddy", expertise: "Dermatology", city: "Mumbai" },
];

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/api/doctors", (req, res) => {
  const cityFilter = req.query.city;
  const filteredDoctors = cityFilter
    ? doctors.filter(
        (doctor) => doctor.city.toLowerCase() === cityFilter.toLowerCase()
      )
    : doctors;

  res.json(filteredDoctors);
});

module.exports = app;
