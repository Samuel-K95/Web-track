import { render, screen } from "@testing-library/react";
import Opportunities from "@/app/opportunities/page";
import StoreProvider from "@/app/StoreProvider";

describe("This is the Job Posting page test", () => {
  beforeEach(() => {
    render(
      <StoreProvider>
        <Opportunities />
      </StoreProvider>
    );
    screen.debug();
  });

  /* Make sure to comment isLoading section in the Opportunities page while testing */
  it("Should contain 'Opportunities' Text", () => {
    const toptext = screen.getByText(/Opportunities/i);
    expect(toptext).toBeInTheDocument();
  });
});
