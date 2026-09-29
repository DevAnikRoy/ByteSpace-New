export type Course = {
  title: string;
  image: string;
  author: string;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  learners: string;
  price: number;
  rating: number;
};

const defaults = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  learners: "26+",
  price: 25,
  rating: 4.5,
};

export const courses: Course[] = [
  { ...defaults, title: "Learn Figma from Basic", image: "/images/courses/course-1.jpg" },
  { ...defaults, title: "Build Digital Asset", image: "/images/courses/course-2.jpg" },
  { ...defaults, title: "the Power of Big Data", image: "/images/courses/course-3.jpg" },
  { ...defaults, title: "Balancing Productivity and Self-Care", image: "/images/courses/course-4.jpg" },
  { ...defaults, title: "Mastering Money Management", image: "/images/courses/course-5.jpg" },
  { ...defaults, title: "From Idea to Startup Success", image: "/images/courses/course-6.jpg" },
];

export const categoryRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];
