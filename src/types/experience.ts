export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
}
