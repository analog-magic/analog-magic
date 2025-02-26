import SectionWrapper from "../../Shared/SectionWrapper";
import FAQQuestions from "./FAQQuestions";

const FAQSection = () => {
  return (
    <SectionWrapper
      sectionName="FAQ"
      sectionTitle="Exposures & Explanations"
      sectionNumber="3"
    >
      <FAQQuestions />
    </SectionWrapper>
  );
};

export default FAQSection;
