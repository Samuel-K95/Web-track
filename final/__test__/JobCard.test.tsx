import { render, screen } from "@testing-library/react";
import JobCard from "@/app/components/JobCard/JobCard";
import StoreProvider from "@/app/StoreProvider";
import JobType from "@/app/JobType";
import { AuthProvider } from "@/app/AuthProvider";
const demoJob: JobType = {
  id: "job-123",
  title: "Software Engineer",
  description:
    "Join our team as a Software Engineer and work on cutting-edge technologies.",
  responsibilities: "Develop, test, and maintain software applications.",
  requiremets: "Bachelor's degree in Computer Science or related field.",
  idealCandidate:
    "Strong problem-solving skills and experience with JavaScript and TypeScript.",
  categories: ["Engineering", "Software Development"],
  opType: "Full-time",
  startDate: "2024-09-01",
  endDate: "2025-09-01",
  deadline: "2024-08-30",
  location: ["San Francisco", "Remote"],
  requiredSkills: ["JavaScript", "TypeScript", "React", "Node.js"],
  whenAndWhere: ["Monday to Friday", "Remote or On-site"],
  orgID: "org-456",
  status: "Active",
  applicantsCount: 25,
  viewsCount: 1000,
  orgName: "Tech Innovations Inc.",
  logoUrl: "",
  isBookmarked: false,
  isRolling: true,
  questions: "What motivates you to work in software development?",
  perksAndBenefits: "Health insurance, 401(k) match, flexible work hours",
  createdAt: "2024-07-01T10:00:00Z",
  updatedAt: "2024-08-01T15:00:00Z",
  orgPrimaryPhone: "+1-800-555-1234",
  average_rating: 4.5,
  total_views: 1500,
};

describe("This the Job Card Test", () => {
  beforeEach(() => {
    render(
      <StoreProvider>
        <AuthProvider>
          <JobCard job={demoJob} index={0} />
        </AuthProvider>
      </StoreProvider>
    );
    screen.debug();
  });

  it("Should have Card", () => {
    const card = screen.getByTestId("0");
    expect(card).toBeInTheDocument();
  });
});
