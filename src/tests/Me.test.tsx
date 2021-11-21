import { render, screen } from "@testing-library/react";
import Me from "../screens/Me";

test("renders learn react link", () => {
  render(<Me />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
