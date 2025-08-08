export interface Template {
  title: string;
  description: string;
  time: string;
  address: string;
  date: string;
  url: string;
};
const one: Template = {
  title: "Brand Identity Workshop: Crafting Memorable Brands",
  description: " Uncover the art of designing brand identities that leave a lasting impression. Join us for a hands-on workshop where you'll learn the essentials of logo design, color psychology, and typography for effective branding.",
  time: "10:00 AM - 3:00 PM",
  address: "Creative Hub, 123 Main Street, Cityville",
  date: "September 15, 2023",
  url: "/events/event-details",
}
const two = {
  title: "Mastering Brand Messaging: Communicate with Impact",
  description: "Dive into the world of brand messaging and voice. In this event, we'll explore how to create a cohesive and compelling brand narrative that resonates with your audience across various marketing platforms.",
  time: "2:00 PM - 5:00 PM",
  address: "Innovation Center, 456 Park Avenue, Townsville",
  date: "October 5, 2023",
  url: "/events/event-details",
}

const three = {
  title: " Navigating the Online Landscape",
  description: "Join industry experts in this summit dedicated to digital branding strategies. From social media presence to website design, discover how to shape your brand identity in the digital age for maximum impact.",
  time: "9:30 AM - 4:30 PM",
  address: " Conference Center, 789 Tech Street, Techville",
  date: "November 20, 2023",
  url: "/events/event-details",
}
export const byName = {
    one,
    two,
    three
};
export const events = Object.values(byName);
