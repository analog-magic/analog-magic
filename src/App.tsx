import "./App.css";
import {
  CourseSection,
  EducationSection,
  FAQSection,
  Hero,
} from "./components/Landing";

function App() {
  return (
    <>
      <Hero />
      <EducationSection />
      <CourseSection />
      <FAQSection />
    </>
  );
}

export default App;
