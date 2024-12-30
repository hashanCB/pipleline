import React from "react"; // Explicitly import React
import { render, screen } from "@testing-library/react";
import Home from "./page"; // Adjust path if necessary
import "@testing-library/jest-dom";

describe("Home Component", () => {
  test("renders the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/next.svg");
  });

  test("renders the Deploy now button", () => {
    render(<Home />);
    const deployButton = screen.getByText("Deploy now");
    expect(deployButton).toBeInTheDocument();
    expect(deployButton).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/new")
    );
  });
});
