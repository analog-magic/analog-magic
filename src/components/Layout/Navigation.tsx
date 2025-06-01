import { Link } from "react-router-dom";
import {
  Burger,
  Container,
  Drawer,
  Group,
  Image,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Navigation = () => {
  const [opened, { toggle }] = useDisclosure();

  const links = [
    { title: "Home", href: "/" },
    { title: "Courses", href: "/courses" },
    { title: "Teachers", href: "/teachers" },
    { title: "Student Gallery", href: "/student-gallery" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <Container size="lg">
      <Group justify="space-between" w="100%" gap="xl" px="md" h="100%">
        <Link to="/">
          <Image
            src="/images/logo/logo1White.png"
            alt="Logo"
            width={40}
            height={60}
          />
        </Link>

        <Group gap="xl" visibleFrom="sm">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              style={{
                color: "#e8e8e8",
                textDecoration: "none",
                fontSize: "1.1rem",
              }}
            >
              {link.title}
            </Link>
          ))}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          color="white"
        />
      </Group>

      <Drawer
        opened={opened}
        onClose={toggle}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000}
      >
        <ScrollArea h="calc(100vh - 60px)" mx="-md">
          <Group gap="xl" p="md" style={{ flexDirection: "column" }}>
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                onClick={toggle}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                {link.title}
              </Link>
            ))}
          </Group>
        </ScrollArea>
      </Drawer>
    </Container>
  );
};

export default Navigation;
