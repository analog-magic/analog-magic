import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { AppShell } from "@mantine/core";

export const Layout = () => {
  return (
    <AppShell header={{ height: 60 }} padding={0}>
      <AppShell.Header bg="#0F0F0F">
        <Navigation />
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <Footer />
    </AppShell>
  );
};
