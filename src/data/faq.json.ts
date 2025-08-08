export interface Template {
question: string;
answer: string;
};
const one = {
question: "What is FabForm?",
answer: "FabForm is a Form Backend Service that allows you to collect form submissions without having to write your own form backend server code. ",
};

const two = {
question: "Can I upload files from my form to FabForm?",
answer: "Yes, we make uploading files from your form a breeze.",
}

const three = {
question: "What is a form endpoint?",
answer: "A form endpoint is a URL where form data is submitted to. You set your HTML form's action attribute to point to the endpoint.",
}

const four = {
question: "Does FabForm block spam submissions?",
answer: "Yes, FabForm has various advanced techniques to detect and block spam form submissions.",
}

const five = {
question: "Does FabForm support AJAX?",
answer: "Yes, FabForm supports AJAX.",
}
/*

const six = {
question: "Is the course self-paced?",
answer: "Yes, our course is self-paced, allowing you to learn at your own convenience. This flexible approach enables you to balance your learning with other commitments.",
}

const seven = {
question: "Will I receive a certificate upon completion?",
answer: "Yes, upon successfully completing the course and its assignments, you will receive a certificate of completion that recognizes your efforts in mastering brand identity design for marketers.",
}

const eight = {
question: "How can I enroll in the course?",
answer: "Enrolling is simple! Just head to our enrollment page, choose the course, and follow the instructions to get started on your brand identity design journey.",
}

const nine = {
question: "Can I access the course materials after completion?",
answer: "Yes, you'll have continued access to the course materials even after completing the course. You can revisit the content, refresh your knowledge, and reference the materials whenever needed.",
}

const ten = {
question: "How can I get in touch for further questions?",
answer: "Feel free to reach out to our support team at [email@example.com](mailto:email@example.com) for any further questions, concerns, or assistance you may need.",
}
*/

export const byName = {
one, two, three, four, five /*, six, seven, eight, nine, ten */

};
export const faq = Object.values(byName);
