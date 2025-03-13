import SectionWrapper from "../../shared/SectionWrapper";
import CourseCarousel from "./CourseCarousel";

const CourseSection = () => {
  return (
    <SectionWrapper
      sectionName="Courses"
      sectionNumber="2"
      sectionTitle="Join our courses"
    >
      <CourseCarousel />
    </SectionWrapper>
  );
};

export default CourseSection;
