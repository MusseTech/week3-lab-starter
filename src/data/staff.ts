import type { Staff } from "../types/staff";

export const staff: Staff[] = [
  {
    id: "S001",
    name: "Ava Martinez",
    role: "Instructor",
    officeLocation: "Building B, Room 211",
    school: "MacPhail School of Energy",
    email: "ava.martinez@riverview.edu",
    startYear: 2015,
    specialties: ["Biology", "STEM Integration", "Assessment Design"],
    funFact: "She collects vintage synths and loves outdoor rock hikes.",
  },
  {
    id: "S002",
    name: "Jonah Kim",
    role: "Advisor",
    school: "MacPhail School of Energy",
    officeLocation: "Building A, Room 105",
    email: "jonah.kim@riverview.edu",
    startYear: 2018,
    specialties: [
      "Student Wellness",
      "College Counseling",
      "Crisis Intervention",
    ],
    funFact: "Runner who has completed three marathons.",
  },
  {
    id: "S003",
    name: "Priya Rao",
    role: "Program Chair",
    school: "MacPhail School of Energy",
    email: "priya.rao@maplewood.edu",
    startYear: 2012,
    specialties: ["Operations", "Budgeting", "Curriculum Alignment"],
    funFact: "Bakes world-class sourdough and mentors local youth theater.",
  },
];
