const doctors = [
  {
    id: 1,
    name: "Dr. Priya Menon",
    specialty: "Cardiologist",
    experience: "12 years",
    availability: "Mon - Fri, 10:00 AM - 4:00 PM"
  },
  {
    id: 2,
    name: "Dr. Arjun Patel",
    specialty: "Neurologist",
    experience: "9 years",
    availability: "Mon - Sat, 9:00 AM - 2:00 PM"
  },
  {
    id: 3,
    name: "Dr. Sara Khan",
    specialty: "Pediatrician",
    experience: "7 years",
    availability: "Tue - Sun, 11:00 AM - 6:00 PM"
  },
  {
    id: 4,
    name: "Dr. Vivek Sharma",
    specialty: "Orthopedic Surgeon",
    experience: "15 years",
    availability: "Mon - Fri, 8:00 AM - 1:00 PM"
  }
];

const initialPatients = [
  {
    id: 101,
    name: "Rahul Verma",
    age: 34,
    gender: "Male",
    condition: "Routine heart checkup"
  },
  {
    id: 102,
    name: "Neha Reddy",
    age: 28,
    gender: "Female",
    condition: "Migraine consultation"
  },
  {
    id: 103,
    name: "Aisha Thomas",
    age: 9,
    gender: "Female",
    condition: "Pediatric review"
  }
];

const initialAppointments = [
  {
    id: 9001,
    patientName: "Rahul Verma",
    doctorName: "Dr. Priya Menon",
    date: "2026-04-29",
    time: "10:30",
    reason: "Follow-up review",
    status: "Confirmed"
  },
  {
    id: 9002,
    patientName: "Neha Reddy",
    doctorName: "Dr. Arjun Patel",
    date: "2026-04-30",
    time: "11:15",
    reason: "MRI discussion",
    status: "Pending"
  }
];

export { doctors, initialPatients, initialAppointments };
