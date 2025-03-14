import {
  Box,
  Burger,
  Drawer,
  Group,
  Image,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { links } from "../../constants/Links";
import logo from "../../assets/images/logo/logo1White.png";

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%" mx={40}>
          <Image src={logo} alt="Logo" width={40} height={60} />
          <Group h="100%" gap={10} visibleFrom="sm" align="right">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={classes.desktopLink}
              >
                {link.title}
              </a>
            ))}{" "}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color="#e8e8e8"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="60%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
        position="right"
        closeButtonProps={{ color: "#e8e8e8" }}
        transitionProps={{ transition: "slide-left", duration: 550 }}
        styles={{
          content: { backgroundColor: "#0f0f0f", borderTop: "none" },
          title: { color: "#e8e8e8" },
          header: { borderBottom: "none", backgroundColor: "#0f0f0f" },
        }}
        title={
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image
              src="/images/logo/logo1White.png"
              alt="Logo"
              width={40}
              height={40}
              mb={10}
            />
            <Text
              sx={{ color: "#e8e8e8", fontWeight: "bold", marginBottom: 10 }}
            >
              ANAL(og)
            </Text>
          </Box>
        }
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          {links.map((link) => (
            <a href={link.href} key={link.title} className={classes.mobileLink}>
              {link.title}
            </a>
          ))}
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navbar;
