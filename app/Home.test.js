import { render, screen } from "@testing-library/react";
import Home from "./page"; // Ensure the path to your component is correct
import "@testing-library/jest-dom";

describe("Home Component", () => {
  test("renders the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders the Deploy now button", () => {
    render(<Home />);
    const button = screen.getByText("Deploy now");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com")
    );
  });
});
