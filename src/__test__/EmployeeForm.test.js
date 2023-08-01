import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmployeeForm from "../Pages/Employees/EmployeeForm";

test("Submitting the form with valid data", () => {
  const mockAddOrEdit = jest.fn();
  const title = "Add Employee";
  render(<EmployeeForm />);
  const firstName = screen.queryAllByLabelText("First Name");

  //   fireEvent.change(screen.getByLabelText("First Name"), {
  //     target: { value: "John" },
  //   });
  //   fireEvent.change(screen.getByLabelText("Last Name"), {
  //     target: { value: "Doe" },
  //   });
  //   fireEvent.click(screen.getByText("Submit"));

  //   // Check if the mockAddOrEdit function was called with the expected form values
  //   expect(mockAddOrEdit).toHaveBeenCalledWith({
  //     id: 0,
  //     gender: "Male",
  //     firstName: "John",
  //     lastName: "Doe",
  //   });
});
