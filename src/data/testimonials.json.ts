export interface Template {

  avatar: string;
  course: string;
  grade: string;
  student: string;
  feedback: string;
};
const one: Template = {

  avatar: "/avatars/head1.svg",
  grade: "I.T. Recruiter",
  course: "Digital Marketing",
  student: "Roberta Johnson",
  feedback: "I'm amazed by the quality of the features offered on the FabForm platform. I evaluated other Form Builders on the market and FabForm comes out on top. The UI design feels better. It's feature rich, terrific pricing and it works a charm. ",
}
const two: Template = {

  avatar: "/avatars/head2.svg",
  grade: "Digital Marketing",
  course: "Data Science",
  student: "Emilio Pirelli",
  feedback: "As a full-time Digital Marketing professional, I needed a flexible and easy way to create and monitor various marketing forms for some picky clients. FabForm has exceeded my expectations. It is -- in my humble opinion -- the best Form Builder out there barnone.",
}
const three: Template = {

  avatar: "/avatars/head3.svg",
  grade: "Web Developer",
  course: "Creative Writing",
  student: "Naomi Chen",
  feedback: "FabForm is my absolute favorite form builder. I can throw together a beautiful form in minutes.  It's reliable and has all the features and ease of use that one needs -- and then some.",
}
export const byName = {
    one,
    two,
    three,
};
export const testimonials = Object.values(byName);
