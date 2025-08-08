export interface Template {
  tag: string;
  avatar: string;
  title: string;
  teacher: string;
  rating: string;
  description: string;
  pricing: string;
  url: string;
};
const one: Template = {
  tag: "UI/UX",
  avatar: "/avatars/head1.svg",
  title: "User Interface",
  teacher: "Juan Gutierrez",
  rating: "8.7",
  description: "Uncover the strategies behind successful digital campaigns, from social media to SEO, and elevate your marketing skills.",
  pricing: "$49.99",
  url: "/courses/course-details",
}
const two: Template = {
  tag: "Fron tend",
  avatar: "/avatars/head2.svg",
  title: "React Hooks",
  teacher: "Marco Susso",
  rating: "9.8",
  description: "Delve into the world of data analytics, learn to extract insights, and make informed decisions using real-world datasets.",
  pricing: "$49.99",
  url: "/courses/course-details",
}
const three: Template = {
  tag: "Design",
  avatar: "/avatars/head3.svg",
  title: "Figma Tokens",
  teacher: "Suss  Anna",
  rating: "7.2",
  description: "Embark on a creative journey to refine your writing skills, exploring various genres and techniques to craft captivating narratives.",
  pricing: "$49.99",
  url: "/courses/course-details",
}
const four: Template = {
  tag: "Programming",
  avatar: "/avatars/head4.svg",
  title: "Web Development",
  teacher: "Ana Plana",
  rating: "8.0",
  description: "Learn the fundamentals of web development, from HTML and CSS to JavaScript, and build dynamic and responsive websites.",
  pricing: "$9.99",
  url: "/courses/course-details",
}
const five: Template = {
  tag: "Finances",
  avatar: "/avatars/head5.svg",
  title: "Financial Literacy",
  teacher: "Good Bunny",
  rating: "10.0",
  description: "Master essential financial concepts, from budgeting and investing to understanding credit, for a strong foundation in personal finance.",
  pricing: "$299.99",
  url: "/courses/course-details",
}
const six: Template = {
  tag: "Photography",
  avatar: "/avatars/head6.svg",
  title: "Photography Basics for Beginners",
  teacher: "Elisa Conprisa",
  rating: "10.0",
  description: "Capture stunning moments with confidence as you explore camera settings, composition techniques, and post-processing skills.",
  pricing: "$19.99",
  url: "/courses/course-details",
}
const seven: Template = {
  tag: "AI",
  avatar: "/avatars/head1.svg",
  title: "Introduction to AI",
  teacher: "Jonn Mel On",
  rating: "6.0",
  description: "Explore the fundamentals of AI, machine learning, and neural networks, and learn how to apply AI concepts to real-world scenarios.",
  pricing: "$79.99",
  url: "/courses/course-details",
}
const eight: Template = {
  tag: "Graphic design",
  avatar: "/avatars/head2.svg",
  title: "Graphic Design",
  teacher: "Joanna Pytipanna",
  rating: "6.4",
  description: "Dive into the world of visual communication, mastering design principles, software tools, and creating impactful visuals.",
  pricing: "$39.99",
  url: "/courses/course-details",
}
const nine: Template = {
  tag: "Communications",
  avatar: "/avatars/head3.svg",
  title: "Communication",
  teacher: "Jesper Bon ",
  rating: "9.4",
  description: "Enhance your communication abilities, including public speaking, writing, and interpersonal communication, for personal and professional success.",
  pricing: "$739.99",
  url: "/courses/course-details",
}
export const byName = {
    one,
    two,
  three,
  four,
  five,
  six,
  seven,
  eight,
    nine


};
export const courses = Object.values(byName);
