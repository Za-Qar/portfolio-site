import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the hero heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /zaid qarout/i })
    ).toBeInTheDocument();
  });

  it("renders the projects section with project cards", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /selected projects/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /societly/i })).toBeInTheDocument();
  });
});
