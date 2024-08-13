import { render, screen } from "@testing-library/react";
import LandingPage from "@/app/page";

describe("testing Landing Page", () => {
  it("should have Get Started Button", () => {
    render(<LandingPage />);
    const myBut = screen.getByText("Get Started");

    expect(myBut).toBeInTheDocument();
  });

  it("should have 'Welcome to Akil's Job listing landing page' text", () => {
    render(<LandingPage />);
    const myText = screen.getByText(
      /Welcome to Akil's Job listing landing page/i
    );
    expect(myText).toBeInTheDocument();
  });
});
