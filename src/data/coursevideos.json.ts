export interface Template {
    time: string;
  title: string;
  description: string;
};
const one: Template = {
    time: "5min",
  title: "1. Course introduction",
  description: "Welcome to the Brand & Identity Design for Marketers course! In this introductory video, we'll provide an overview of what you can expect from this course, the key concepts we'll be covering, and how this knowledge will benefit you as a marketer. Get ready to dive into the exciting world of brand identity design",
}
const two: Template = {
    time: "7min",
  title: "2. Branding in marketing",
  description: "In this video, we'll explore the significance of branding in the world of marketing. Learn how a strong brand identity can establish trust, differentiate your business, and create lasting connections with your audience. Discover the essential role branding plays in shaping consumer perceptions and driving business success.",
}
const three: Template = {
    time: "5min",
  title: "3. Branding identity",
  description: "Clear up any confusion between brand identity and brand image in this video. We'll discuss the distinctions between these two concepts and how they contribute to the overall perception of a brand. By the end of this video, you'll have a solid grasp of the fundamental differences between brand identity and brand image.",
}
const four: Template = {
    time: "8min",
  title: "4. Effective branding",
  description: "Uncover the psychology behind successful branding. This video delves into the emotions and perceptions associated with different brand elements, such as colors, shapes, and symbols. Gain insights into how to leverage psychological principles to create brand identities that resonate deeply with your target audience.",
}
const five: Template = {
    time: "8min",
  title: "5. Logo design",
  description: "Creating a memorable logo is a crucial part of brand identity design. In this video, we'll guide you through the process of designing a compelling logo that encapsulates a brand's essence. Learn about the key considerations, principles of logo design, and how to make your logo stand out in a crowded market.",
}
const six: Template = {
    time: "14min",
  title: "6. Brand psychology",
  description: "Colors evoke emotions and perceptions, making them essential in branding. Join us in exploring the world of color psychology and how different color choices can influence consumer behavior and brand associations. Discover how to choose colors that align with your brand's values and evoke the desired emotions.",
}
export const byName = {
    one,
    two,
    three,
    four,
    five,
    six
};
export const coursevideos = Object.values(byName);
