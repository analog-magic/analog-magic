import { render, screen } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import Footer from "../components/global/Footer"; // Skontroluj cestu

// Funkcia na obalenie komponentu do MantineProvider
const renderWithProviders = (ui: React.ReactElement) => {
  return render(<MantineProvider>{ui}</MantineProvider>);
};

describe("Footer component", () => {
  test("renders the logo image", () => {
    renderWithProviders(<Footer />);
    const logo = screen.getByRole("img", { name: /logo/i });
    expect(logo).toBeInTheDocument();
  });

  test("renders all footer links", () => {
    renderWithProviders(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  test("renders social media icons", () => {
    renderWithProviders(<Footer />);
    const icons = screen.getAllByRole("button");
    expect(icons.length).toBe(3);
  });
});
