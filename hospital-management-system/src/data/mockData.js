const wards = [
  { id: 1, name: "General Ward A", type: "General", capacity: 20, occupied: 14 },
  { id: 2, name: "ICU", type: "Intensive Care", capacity: 10, occupied: 7 },
  { id: 3, name: "Pediatric Ward", type: "Pediatric", capacity: 15, occupied: 9 },
  { id: 4, name: "Maternity Ward", type: "Maternity", capacity: 12, occupied: 5 },
  { id: 5, name: "Surgical Ward", type: "Surgical", capacity: 18, occupied: 11 }
];

const medicines = [
  { id: 1, name: "Paracetamol 500mg", category: "Analgesic", stock: 500, unit: "Tablets", reorderLevel: 100 },
  { id: 2, name: "Amoxicillin 250mg", category: "Antibiotic", stock: 80, unit: "Capsules", reorderLevel: 100 },
  { id: 3, name: "Metformin 500mg", category: "Antidiabetic", stock: 320, unit: "Tablets", reorderLevel: 50 },
  { id: 4, name: "Atorvastatin 10mg", category: "Statin", stock: 45, unit: "Tablets", reorderLevel: 60 },
  { id: 5, name: "Normal Saline 500ml", category: "IV Fluid", stock: 200, unit: "Bottles", reorderLevel: 50 }
];

const initialBills = [
  { id: 8001, patientName: "Rahul Verma", services: "Consultation, ECG", amount: 2500, status: "Paid", date: "2026-04-29" },
  { id: 8002, patientName: "Neha Reddy", services: "MRI Scan, Consultation", amount: 8500, status: "Pending", date: "2026-04-30" },
  { id: 8003, patientName: "Aisha Thomas", services: "Pediatric Review, Blood Test", amount: 1800, status: "Paid", date: "2026-04-28" }
];

const initialLabReports = [
  { id: 7001, patientName: "Rahul Verma", test: "Complete Blood Count", result: "Normal", status: "Completed", date: "2026-04-28" },
  { id: 7002, patientName: "Neha Reddy", test: "MRI Brain", result: "Pending review", status: "Pending", date: "2026-04-30" },
  { id: 7003, patientName: "Aisha Thomas", test: "Blood Glucose", result: "92 mg/dL", status: "Completed", date: "2026-04-27" }
];

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

export { doctors, initialPatients, initialAppointments, wards, medicines, initialBills, initialLabReports };
