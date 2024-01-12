import * as z from "zod";

export const Form1Validation = z.object({
  fullname: z.string().min(3).max(40),
  birthdate: z.string().min(3).max(40),
  phone: z.string().min(3).max(40),
  gender: z.string().min(3).max(40),
  address: z.string().min(3).max(40),
  projectname: z.string().min(3).max(40),
});

export const Form2Validation = z.object({
  // projectDescription: z.string().min(3).max(300),
  // startDate: z.string().min(3).max(200),
  // completionDate: z.string().min(3).max(200),
});