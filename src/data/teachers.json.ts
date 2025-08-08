export interface Template {
  avatar: string;
  teacher: string;
  profession: string;
  description: string;
  url: string;
};
const one: Template = {
  avatar: "/avatars/head1.svg",
  teacher: "Juan Gutierrez",
  profession: "Marketing Expert",
  description: "Alex Martinez is a creative director with a deep understanding of branding and marketing dynamics.",
  url: "/teachers/teacher-details",
}
const two: Template = {
  avatar: "/avatars/head2.svg",
  teacher: "Emily Roberts",
  profession: "Brand Strategist and Designer",
  description: "Emily Roberts is a seasoned brand strategist and designer with over 10 years of experience in helping businesses build impactful brand identities.",
  url: "/teachers/teacher-details",
}
const three: Template = {
  avatar: "/avatars/head3.svg",
  teacher: "Jessica Lee",
  profession: "Visual Artist and Branding Consultant",
  description: "Jessica Lee, a visual artist turned branding consultant, brings a fresh perspective to brand identity design.",
  url: "/teachers/teacher-details",
}
export const byName = {
  one,
  two,
  three
};
export const teachers = Object.values(byName);
