import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Anchor,
  Box,
  Container,
  Group,
  Image,
  useMantineTheme,
} from "@mantine/core";

import classes from "./Footer.module.css";

const Footer = () => {
  const theme = useMantineTheme();

  const links = [
    { title: "Courses", href: "/courses" },
    { title: "Teachers", href: "/teachers" },
    { title: "Contact", href: "/contact" },
  ];

  const items = links.map((link, index) => (
    <Anchor
      c="white"
      key={index}
      href={link.href}
      lh={6}
      onClick={(event) => event.preventDefault()}
      h={100}
    >
      {link.title}
    </Anchor>
  ));

  return (
    <Box className={classes.footer}>
      <Container>
        <Box className={classes.inner}>
          <Image
            className={classes.invert}
            src="/images/logo/logo2.png"
            h={100}
            w={200}
            mb={10}
          />

          <Group className={classes.links}>{items}</Group>

          <Group gap="l" align="center">
            <ActionIcon size="lg" color={theme.colors.blue[6]} radius="xl">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color={theme.colors.red[8]} radius="xl">
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color={theme.colors.pink[7]} radius="xl">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
