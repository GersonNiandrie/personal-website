import type { Project } from "../types/project";

export const projects: Project[] = [
  {
  id: "coffee-pos",
  title: "Coffee Point of Sale (PoS) System",
  description: "A simple web-based Point of Sale system for a small coffee shop to manage products and customer orders.",

  situation: 
    "The coffee shop needed a fast and easy way to record orders without using a complex or expensive PoS solution.",
  task: 
    "Design and develop a lightweight PoS interface that allows staff to add products to a cart and calculate totals accurately.",
  action: 
    "Built a React-based interface with reusable components, implemented add-to-cart and remove logic using state management, and styled the UI for both desktop and tablet usage.",
  result: 
    "The PoS system successfully handled daily transactions in a clear and efficient workflow, reducing order input time and minimizing mistakes.",
    
  technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  image:"https://images.unsplash.com/photo-1556742517-fde6c2abbe11?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
  id: "task-tracker",
  title: "Task Tracking Web Application",
  description: "A web-based task tracking application to help users organize daily tasks and monitor progress.",

  situation: 
    "Managing tasks across notes and messaging apps made it difficult to track priorities and completion status.",
  task: 
    "Build a simple and intuitive task management app that allows users to create, update, and remove tasks.",
  action: 
    "Developed a React application with controlled form inputs, implemented task state management, and added conditional rendering for task status and filtering.",
  result: 
    "The application improved task visibility and helped users stay organized by providing a clear overview of pending and completed tasks.",

  technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  image:"https://plus.unsplash.com/premium_photo-1706191097326-cd317671d1fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
  id: "personal-portfolio",
  title: "Personal Portfolio Website",
  description: "A responsive personal portfolio website to showcase projects, skills, and work experience.",

  situation: 
    "I needed a professional online presence to present my projects and skills to potential employers.",
  task: 
    "Create a clean, responsive, and easy-to-navigate website that highlights my work and technical background.",
  action: 
    "Designed the layout and UI, implemented reusable components in React, and structured project data using a consistent object format for scalability.",
  result: 
    "The portfolio effectively communicates my experience and projects, making it easier for recruiters to understand my skill set.",

  technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  image:"https://images.unsplash.com/photo-1588912914074-b93851ff14b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
  id: "product-management",
  title: "Product Management Dashboard",
  description: "A dashboard application for managing product data such as name, price, and inventory list.",

  situation: 
    "Managing product data manually was inefficient and prone to errors.",
  task: 
    "Develop a simple dashboard that allows users to add, view, and delete products from a table.",
  action: 
    "Implemented form handling and table rendering in React, added delete functionality with unique identifiers, and ensured data updates reflected instantly in the UI.",
  result: 
    "The dashboard streamlined product management tasks and improved data accuracy through real-time updates.",

  technologies: ["React", "JavaScript", "Tailwind CSS"],
  image:"https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }


];
