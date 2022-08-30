import { screen, render, fireEvent } from "@testing-library/react";
import SummaryForm from "../summary/SummaryForm";

test("check if checkbox and button exist and by default btn disabled", () => {
  render(<SummaryForm />);
  const chkel = screen.getByRole("checkbox", { name: "default-checkbox" });
  expect(chkel).toBeInTheDocument();
  expect(chkel).not.toBeChecked();
  const btnel = screen.getByRole("button", { name: "Confirm order" });
  expect(btnel).toBeInTheDocument();
  expect(btnel).toBeDisabled();
});

test("when user clicked on checkbox and button should be enabled", () => {
  render(<SummaryForm />);
  const chkel = screen.getByRole("checkbox", { name: "default-checkbox" });
  fireEvent.click(chkel);
  const btnel = screen.getByRole("button", { name: "Confirm order" });
  expect(btnel).toBeEnabled();
});
