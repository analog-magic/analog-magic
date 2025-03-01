import { IconPlus } from "@tabler/icons-react";
import { Accordion, Box, Container, ThemeIcon } from "@mantine/core";
import FAQItem from "./FAQItem";
import { faqQuestions } from "../../../data/faqQuestions";

const FAQQuestions = () => {
  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top-left",
        position: "relative",
        color: "white",
      }}
    >
      <Container size="sm">
        <Accordion
          chevronPosition="right"
          chevronSize={26}
          variant="separated"
          defaultValue="film-instead-of-digital"
          disableChevronRotation
          styles={{
            label: { color: "white" },
          }}
          chevron={
            <ThemeIcon radius="sm" c={"white"} bg={"#f8a500"} size={26}>
              <IconPlus size={18} stroke={1.5} />
            </ThemeIcon>
          }
        >
          {faqQuestions.map((question) => {
            return <FAQItem key={question.question} {...question} />;
          })}
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQQuestions;
