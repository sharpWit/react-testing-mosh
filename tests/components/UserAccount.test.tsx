import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should render user name when name prop is passed", () => {
    const user: User = { id: 1, name: "Saeed" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
  it("should render edit button for admin users", () => {
    const user: User = { id: 1, name: "Saeed", isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

    expect(button).toHaveTextContent(/Edit/i);
  });
  it("should not render edit button for not admin users", () => {
    const user: User = { id: 1, name: "Saeed" };

    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");

    expect(button).not.toBeInTheDocument();
  });
});
