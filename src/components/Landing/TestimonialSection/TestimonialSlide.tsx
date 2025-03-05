import { Carousel } from "@mantine/carousel";
import { Avatar, Card, Group, Text } from "@mantine/core";

type TestimonialSlideProps = {
  avatar: string;
  name: string;
  review: string;
};
const TestimonialSlide = ({ avatar, name, review }: TestimonialSlideProps) => {
  return (
    <Carousel.Slide
      key={name}
      sx={{
        display: "flex",
        justifyContent: "center !important",
        maxHeight: "160px !important",
      }}
    >
      <Card
        withBorder
        shadow="sm"
        px={50}
        radius="md"
        bg="transparent"
        w="fit-content"
        styles={{
          root: { borderColor: "#f8a500" },
        }}
      >
        <Group w={300} justify="start" align="center" gap="xs">
          <Avatar src={avatar} radius="xl" size="lg" />
          <Text c="white" w={500}>
            {name}
          </Text>
        </Group>
        <Text size="sm" fs="italic" c="dimmed">
          "{review}"
        </Text>
      </Card>
    </Carousel.Slide>
  );
};

export default TestimonialSlide;
