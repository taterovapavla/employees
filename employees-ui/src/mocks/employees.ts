import { Employee } from "../types";

export const employees: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    title: "Software Engineer",
    tribe: {
      id: 1,
      name: "Interstellar",
      department: "Platform",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Product Manager",
    tribe: {
      id: 1,
      name: "Interstellar",
      department: "Platform",
    },
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Sales Representative",
    tribe: {
      id: 1,
      name: "Interstellar",
      department: "Platform",
    },
  },
  {
    id: 4,
    name: "Sarah Williams",
    title: "UX Designer",
    tribe: { id: 2, name: "Stellar", department: "Design" },
  },
  {
    id: 5,
    name: "David Brown",
    title: "Data Analyst",
    tribe: { id: 3, name: "Galaxy", department: "Analytics" },
  },
  {
    id: 6,
    name: "Emily Davis",
    title: "Frontend Developer",
    tribe: { id: 4, name: "Cosmos", department: "Engineering" },
  },
  {
    id: 7,
    name: "Michael Wilson",
    title: "QA Engineer",
    tribe: { id: 4, name: "Cosmos", department: "Engineering" },
  },
  {
    id: 8,
    name: "Olivia Taylor",
    title: "Marketing Specialist",
    tribe: { id: 5, name: "Nebula", department: "Marketing" },
  },
];
