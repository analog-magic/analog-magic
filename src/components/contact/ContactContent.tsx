import { Box, Card, Container, Grid, Group, Text, Title } from "@mantine/core";
import { contactItems } from "../../data/contactItems";

const ContactContent = () => {
  return (
    <Container size="lg" py={50} h="70vh">
      <Box ta="center" mb="xl">
        <Text size="sm" fw={500} c="orange">
          Contact us
        </Text>
        <Title order={2} fw={700} c="gray">
          We’d love to hear from you
        </Title>
        <Text size="md" c="gray">
          Chat to our friendly team.
        </Text>
      </Box>

      <Grid gutter="xl">
        {contactItems.map((item, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
            <Card withBorder shadow="sm" p="xl" radius="md" h={260}>
              <Group>
                <Box>{item.icon}</Box>
              </Group>
              <Text fw={600} size="lg" mt="md">
                {item.title}
              </Text>
              <Text c="dimmed" size="sm">
                {item.description}
              </Text>
              <Text
                size="sm"
                mt="sm"
                fw={500}
                style={{ whiteSpace: "pre-line" }}
              >
                {item.details}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ContactContent;
