import {
  CourseSection,
  EducationSection,
  FAQSection,
  Hero,
  TestimonialSection,
} from "../components/Landing";

const Home = () => {
  return (
    <>
      <Hero />
      <EducationSection />
      <CourseSection />
      <FAQSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
