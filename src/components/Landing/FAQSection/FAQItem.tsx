import { Accordion } from "@mantine/core";
import classes from "./FAQSection.module.css";
type FAQItemProps = {
  question: string;
  answer: string;
  value: string;
  icon: React.ReactNode;
};

const FAQItems = ({ question, answer, value, icon }: FAQItemProps) => {
  return (
    <Accordion.Item
      className={classes.item}
      bg={"transparent"}
      c={"white"}
      value={value}
    >
      <Accordion.Control icon={icon} fz={19} fw={500}>
        {question}
      </Accordion.Control>
      <Accordion.Panel fz={14}>{answer}</Accordion.Panel>
    </Accordion.Item>
  );
};

export default FAQItems;
