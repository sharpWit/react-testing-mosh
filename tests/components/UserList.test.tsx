import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";

describe("UserList", () => {
  it("should render no users message when no users passed", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/No users/i)).toBeInTheDocument;
  });
  it("should render a list of users", () => {
    const users = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
      { id: 3, name: "User 3" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });

      expect(link).toBeInTheDocument;
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
