import "./App.css";
import {
  CourseSection,
  EducationSection,
  FAQSection,
  Hero,
  TestimonialSection,
} from "./components/Landing";

function App() {
  return (
    <>
      <Hero />
      <EducationSection />
      <CourseSection />
      <FAQSection />
      <TestimonialSection />
    </>
  );
}

export default App;
